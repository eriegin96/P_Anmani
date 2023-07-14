"use client";

import {ConsultForm} from "@/components";
import {Modal} from "antd";
import {ReactNode, createContext, useContext, useState} from "react";

type TModalContextDefault = {
	showBookingModal: () => void;
	hideBookingModal: () => void;
};

type TModalProviderProps = {
	children: ReactNode;
};

export const ModalContext = createContext<TModalContextDefault>({
	showBookingModal: () => {},
	hideBookingModal: () => {},
});

export default function ModalProvider({children}: TModalProviderProps) {
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

	const showBookingModal = () => {
		setIsBookingModalOpen(true);
	};
	const hideBookingModal = () => {
		setIsBookingModalOpen(false);
	};

	const value = {
		showBookingModal,
		hideBookingModal,
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
			</>
		</ModalContext.Provider>
	);
}

export const useModalContext = () => useContext(ModalContext);
