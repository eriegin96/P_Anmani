"use client";

import ConsultForm from "@/app/(site)/user/gio-hang/_components/ConsultForm";
import {Modal} from "antd";
import {ReactNode, createContext, useContext, useState} from "react";

type TModalContextDefault = {
	isBookingModalOpen: boolean;
	showBookingModal: () => void;
};

type TModalProviderProps = {
	children: ReactNode;
};

export const ModalContext = createContext<TModalContextDefault>({
	isBookingModalOpen: false,
	showBookingModal: () => {},
});

export default function ModalProvider({children}: TModalProviderProps) {
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

	const showBookingModal = () => {
		setIsBookingModalOpen(true);
	};

	const handleOk = () => {
		setIsBookingModalOpen(false);
	};

	const handleCancel = () => {
		setIsBookingModalOpen(false);
	};

	const value = {
		isBookingModalOpen,
		showBookingModal,
	};

	return (
		<ModalContext.Provider value={value}>
			<>
				{children}
				<Modal
					title="Đặt lịch"
					open={isBookingModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={[]}
				>
					<ConsultForm />
				</Modal>
			</>
		</ModalContext.Provider>
	);
}

export const useModalContext = () => useContext(ModalContext);
