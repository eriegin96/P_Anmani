"use client";

import {Button as AntdButton, Col, Drawer, Modal, Row, Typography} from "antd";
import {ReactNode, createContext, useContext, useState} from "react";
import styles from "./productComparisonProvider.module.scss";
import {IconPlus, IconX} from "@tabler/icons-react";
import {Button, ComparisonModalPortal} from "@/components";
import Image from "next/image";
import clsx from "clsx";
import {TProduct, TSlotId} from "@/types/product.type";
import {ROUTE} from "@/constants/route";
import Link from "next/link";

type TProductComparisonProviderContextDefault = {
	showDrawer: () => void;
	showComparisonModal: (slotId: TSlotId) => void;
	hideComparisonModal: () => void;
	setComparisonProduct: (product: TProduct) => void;
	removeComparisonProduct: (slotId: TSlotId) => void;
	selectedProducts: Map<TSlotId, TProduct | null>;
};

type TProductComparisonProviderProps = {
	children: ReactNode;
};

export const ProductComparisonContext =
	createContext<TProductComparisonProviderContextDefault>({
		showDrawer: () => {},
		showComparisonModal: () => {},
		hideComparisonModal: () => {},
		setComparisonProduct: () => {},
		removeComparisonProduct: () => {},
		selectedProducts: new Map([]),
	});

export default function ProductComparisonProvider({
	children,
}: TProductComparisonProviderProps) {
	const [isComparisonOpen, setIsComparisonOpen] = useState(false);
	const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
	const [slotId, setSlotId] = useState<TSlotId>("1");

	const [selectedProducts, setSelectedProducts] = useState<
		Map<TSlotId, TProduct | null>
	>(
		new Map([
			["1", null],
			["2", null],
			["3", null],
		])
	);

	const showDrawer = () => {
		setIsComparisonOpen(true);
	};
	const hideDrawer = () => {
		setIsComparisonOpen(false);
	};

	const showComparisonModal = (slotId: TSlotId) => {
		setIsComparisonModalOpen(true);
		setSlotId(slotId);
	};
	const hideComparisonModal = () => {
		setIsComparisonModalOpen(false);
	};
	const setComparisonProduct = (product: TProduct) => {
		const newSelectedProducts = new Map(selectedProducts);
		newSelectedProducts.set(slotId, product);
		setSelectedProducts(newSelectedProducts);
	};
	const removeComparisonProduct = (slotId: TSlotId) => {
		const newSelectedProducts = new Map(selectedProducts);
		newSelectedProducts.set(slotId, null);
		setSelectedProducts(newSelectedProducts);
	};

	const value = {
		showDrawer,
		showComparisonModal,
		hideComparisonModal,
		setComparisonProduct,
		selectedProducts,
		removeComparisonProduct,
	};

	return (
		<ProductComparisonContext.Provider value={value}>
			<>
				{children}
				<Drawer
					placement="bottom"
					onClose={hideDrawer}
					open={isComparisonOpen}
					rootClassName={styles.drawer}
					headerStyle={{display: "none"}}
				>
					<Row>
						{Array.from(selectedProducts, ([id, product]) => ({
							id,
							product,
						})).map(({id, product}, index) => (
							<Col
								key={id}
								span={8}
								className={clsx(
									styles.col,
									index !== selectedProducts.size - 1 && styles.colBorder
								)}
							>
								{product ? (
									<>
										<Button
											onClick={() => removeComparisonProduct(id)}
											className={styles.removeBtn}
										>
											<IconX size={20} />
										</Button>
										<div>
											<Image
												src={product.image.thumbnail}
												alt={product.name}
												fill
											/>
										</div>
										<Typography.Text>{product.name}</Typography.Text>
									</>
								) : (
									<Button onClick={() => showComparisonModal(id)}>
										<span>
											<IconPlus />
										</span>
										Thêm bất động sản
									</Button>
								)}
							</Col>
						))}
					</Row>
					<Row>
						<Col span={12}>
							<AntdButton
								type="default"
								className={styles.btn}
								onClick={hideDrawer}
							>
								Thu gọn
							</AntdButton>
						</Col>
						<Col span={12}>
							<Link href={ROUTE.COMPARISON} className={styles.comparisonLink}>
								<AntdButton
									type="primary"
									className={styles.btn}
									onClick={hideDrawer}
								>
									So sánh ngay
								</AntdButton>
							</Link>
						</Col>
					</Row>
				</Drawer>

				<Modal
					title="Tìm sản phẩm"
					open={isComparisonModalOpen}
					onOk={hideComparisonModal}
					onCancel={hideComparisonModal}
					footer={[]}
				>
					<ComparisonModalPortal />
				</Modal>
			</>
		</ProductComparisonContext.Provider>
	);
}

export const useProductComparisonContext = () =>
	useContext(ProductComparisonContext);
