"use client";

import {ConsultForm} from "@/components";
import {API_ENDPOINT} from "@/constants/api";
import {Modal} from "antd";
import {ReactNode, createContext, useContext, useState} from "react";
import {useSWRConfig} from "swr";

type TDeleteConfirmationModalInfo = {
	trigger: Function;
	id: string;
	name?: string;
	keyRevalidate?: string;
};

type TModalContextDefault = {
	showBookingModal: () => void;
	hideBookingModal: () => void;
	showMDeleteConfirmationModal: ({
		trigger,
		id,
		name,
		keyRevalidate,
	}: TDeleteConfirmationModalInfo) => void;
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
	const [handler, setHandler] = useState<TDeleteConfirmationModalInfo>({
		trigger: () => {},
		id: "",
		name: "",
		keyRevalidate: "",
	});
	const {mutate} = useSWRConfig();

	// Booking Modal
	const showBookingModal = () => {
		setIsBookingModalOpen(true);
	};
	const hideBookingModal = () => {
		setIsBookingModalOpen(false);
	};

	// Delete Confirmation Modal
	const showMDeleteConfirmationModal = (
		handler: TDeleteConfirmationModalInfo
	) => {
		setIsDeleteConfirmationModalOpen(true);
		setHandler(handler);
	};
	const hideDeleteConfirmationModal = () => {
		setIsDeleteConfirmationModalOpen(false);
	};
	const confirmDeleteConfirmationModal = () => {
		handler.trigger?.(handler.id);
		setTimeout(() => {
			mutate(handler.keyRevalidate);
		}, 100);
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
					<p>Bạn có muốn xóa {handler.name}?</p>
				</Modal>
			</>
		</ModalContext.Provider>
	);
}

export const useModalContext = () => useContext(ModalContext);
