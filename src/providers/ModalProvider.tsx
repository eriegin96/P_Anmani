"use client";

import {ConsultForm} from "@/components";
import {Modal} from "antd";
import {ReactNode, createContext, useContext, useState} from "react";

type TModalContextDefault = {
	showBookingModal: () => void;
	hideBookingModal: () => void;
	showMDeleteConfirmationModal: ({
		trigger,
		id,
	}: {
		trigger: Function;
		id: string;
	}) => void;
	hideDeleteConfirmationModal: () => void;
};

type TModalProviderProps = {
	children: ReactNode;
};

export const ModalContext = createContext<TModalContextDefault>({
	showBookingModal: () => {},
	hideBookingModal: () => {},
	showMDeleteConfirmationModal: () => {},
	hideDeleteConfirmationModal: () => {},
});

export default function ModalProvider({children}: TModalProviderProps) {
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
	const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] =
		useState(false);
	const [handler, setHandler] = useState<{trigger: Function; id: string}>({
		trigger: () => {},
		id: "",
	});

	// Booking Modal
	const showBookingModal = () => {
		setIsBookingModalOpen(true);
	};
	const hideBookingModal = () => {
		setIsBookingModalOpen(false);
	};

	// Delete Confirmation Modal
	const showMDeleteConfirmationModal = ({
		trigger,
		id,
	}: {
		trigger: Function;
		id: string;
	}) => {
		setIsDeleteConfirmationModalOpen(true);
		setHandler({trigger, id});
	};
	const hideDeleteConfirmationModal = () => {
		setIsDeleteConfirmationModalOpen(false);
	};
	const confirmDeleteConfirmationModal = () => {
		handler.trigger?.(handler.id);
		hideDeleteConfirmationModal();
	};

	const value = {
		showBookingModal,
		hideBookingModal,
		showMDeleteConfirmationModal,
		hideDeleteConfirmationModal,
	};

	return (
		<ModalContext.Provider value={value}>
			<>
				{children}
				<Modal
					title="Đặt lịch"
					open={isBookingModalOpen}
					onOk={hideBookingModal}
					onCancel={hideBookingModal}
					footer={[]}
				>
					<ConsultForm />
				</Modal>
				<Modal
					title="Xóa item"
					open={isDeleteConfirmationModalOpen}
					onOk={confirmDeleteConfirmationModal}
					onCancel={hideDeleteConfirmationModal}
				>
					<p>Bạn có muốn xóa {handler.id}?</p>
				</Modal>
			</>
		</ModalContext.Provider>
	);
}

export const useModalContext = () => useContext(ModalContext);
