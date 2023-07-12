"use client";

import {Col, Drawer, Row} from "antd";
import {ReactNode, createContext, useContext, useState} from "react";
import styles from "./productComparisonProvider.module.scss";
import {Button} from "@/components";

type TProductComparisonProviderContextDefault = {
	isComparisonOpen: boolean;
	showDrawer: () => void;
};

type TProductComparisonProviderProviderProps = {
	children: ReactNode;
};

export const ProductComparisonProviderContext =
	createContext<TProductComparisonProviderContextDefault>({
		isComparisonOpen: false,
		showDrawer: () => {},
	});

export default function ProductComparisonProviderProvider({
	children,
}: TProductComparisonProviderProviderProps) {
	const [isComparisonOpen, setIsComparisonOpen] = useState(false);

	const showDrawer = () => {
		setIsComparisonOpen(true);
	};

	const onClose = () => {
		setIsComparisonOpen(false);
	};

	const value = {
		isComparisonOpen,
		showDrawer,
	};

	return (
		<ProductComparisonProviderContext.Provider value={value}>
			<>
				{children}
				<Drawer
					placement="bottom"
					width={500}
					onClose={onClose}
					open={isComparisonOpen}
					rootClassName={styles.drawer}
				>
					<Row>
						<Col span={8}>1</Col>
						<Col span={8}>2</Col>
						<Col span={8}>3</Col>
					</Row>
					<Row>
						<Col span={12}>
							<Button>Thu gọn</Button>
						</Col>
						<Col span={12}>
							<Button>So sánh ngay</Button>
						</Col>
					</Row>
				</Drawer>
			</>
		</ProductComparisonProviderContext.Provider>
	);
}

export const useProductComparisonProviderContext = () =>
	useContext(ProductComparisonProviderContext);
