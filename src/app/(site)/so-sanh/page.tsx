"use client";

import styles from "./soSanh.module.scss";
import {AdvancedSearch} from "../_components";
import {Col, Collapse, CollapseProps, Row} from "antd";
import {useMemo} from "react";
import {IconChevronDown, IconPlus} from "@tabler/icons-react";
import clsx from "clsx";
import {useProductComparisonContext} from "@/providers/ProductComparisonProvider";
import ComparisonSlot from "./_components/ComparisonSlot";
import {getDataFromKey} from "@/utils/getDataFromKey";
import {PRODUCT_DETAIL_TITLE} from "@/constants/product";
import {voucherList} from "@/mock/data";
import {formatCurrency} from "@/utils/formatCurrency";

export default function SoSanhPage() {
	const {selectedProducts, showComparisonModal} = useProductComparisonContext();

	const onChange = (key: string | string[]) => {
		console.log(key);
	};

	const product1 = useMemo(() => selectedProducts.get("1"), [selectedProducts]);
	const product2 = useMemo(() => selectedProducts.get("2"), [selectedProducts]);
	const product3 = useMemo(() => selectedProducts.get("3"), [selectedProducts]);
	const colSpan = useMemo(
		() => (product3 ? 8 : product2 ? 12 : 24),
		[product3, product2]
	);

	const items: CollapseProps["items"] = useMemo(() => {
		return [
			{
				key: "1",
				label: "Ưu đãi chiết khấu",
				children: (
					<div className={styles.criteria}>
						<span>Voucher</span>
						<Row>
							{product1 && (
								<Col span={colSpan}>
									{voucherList
										.filter((voucher) => voucher.productId === product1.id)
										.map(({id, discount}) => (
											<div key={id}>
												Giảm{" "}
												{discount?.amount
													? formatCurrency(discount.amount)
													: `${discount.percent}%`}
											</div>
										))}
								</Col>
							)}
							{product2 && (
								<Col span={colSpan}>
									{voucherList
										.filter((voucher) => voucher.productId === product2.id)
										.map(({id, discount}) => (
											<div key={id}>
												Giảm{" "}
												{discount?.amount
													? formatCurrency(discount.amount)
													: `${discount.percent}%`}
											</div>
										))}
								</Col>
							)}
							{product3 && (
								<Col span={colSpan}>
									{voucherList
										.filter((voucher) => voucher.productId === product3.id)
										.map(({id, discount}) => (
											<div key={id}>
												Giảm{" "}
												{discount?.amount
													? formatCurrency(discount.amount)
													: `${discount.percent}%`}
											</div>
										))}
								</Col>
							)}
						</Row>
					</div>
				),
			},
			{
				key: "2",
				label: "Thông số",
				children: (
					<>
						{["tag", "type", "investor", "location.main"].map((key) => (
							<div key={key} className={styles.criteria}>
								<span>{getDataFromKey(PRODUCT_DETAIL_TITLE, key)}</span>
								<Row>
									{product1 && (
										<Col span={colSpan}>{getDataFromKey(product1, key)}</Col>
									)}
									{product2 && (
										<Col span={colSpan}>{getDataFromKey(product2, key)}</Col>
									)}
									{product3 && (
										<Col span={colSpan}>{getDataFromKey(product3, key)}</Col>
									)}
								</Row>
							</div>
						))}
					</>
				),
			},
			{
				key: "3",
				label: "Tiện ích",
				children: (
					<>
						{[
							"information.landArea",
							"information.floor",
							"information.bedroom",
							"information.bathroom",
							"information.floorArea",
							"information.other",
						].map((key) => (
							<div key={key} className={styles.criteria}>
								<span>{getDataFromKey(PRODUCT_DETAIL_TITLE, key)}</span>
								<Row>
									{product1 && (
										<Col span={colSpan}>{getDataFromKey(product1, key)}</Col>
									)}
									{product2 && (
										<Col span={colSpan}>{getDataFromKey(product2, key)}</Col>
									)}
									{product3 && (
										<Col span={colSpan}>{getDataFromKey(product3, key)}</Col>
									)}
								</Row>
							</div>
						))}
					</>
				),
			},
			{
				key: "4",
				label: "Vị trí",
				children: (
					<>
						{["location.detail", "location.main", "location.sub"].map((key) => (
							<div key={key} className={styles.criteria}>
								<span>{getDataFromKey(PRODUCT_DETAIL_TITLE, key)}</span>
								<Row key={key}>
									{product1 && (
										<Col span={colSpan}>{getDataFromKey(product1, key)}</Col>
									)}
									{product2 && (
										<Col span={colSpan}>{getDataFromKey(product2, key)}</Col>
									)}
									{product3 && (
										<Col span={colSpan}>{getDataFromKey(product3, key)}</Col>
									)}
								</Row>
							</div>
						))}
					</>
				),
			},
			{
				key: "5",
				label: "Chính sách bán hàng",
				children: (
					<>
						{["policy.main", "policy.loan", "policy.equity"].map((key) => (
							<div key={key} className={styles.criteria}>
								<span>{getDataFromKey(PRODUCT_DETAIL_TITLE, key)}</span>
								<Row key={key}>
									{product1 && (
										<Col span={colSpan}>{getDataFromKey(product1, key)}</Col>
									)}
									{product2 && (
										<Col span={colSpan}>{getDataFromKey(product2, key)}</Col>
									)}
									{product3 && (
										<Col span={colSpan}>{getDataFromKey(product3, key)}</Col>
									)}
								</Row>
							</div>
						))}
					</>
				),
			},
			{
				key: "6",
				label: "Mô tả",
				children: (
					<>
						{["description.pros"].map((key) => (
							<div key={key} className={styles.criteria}>
								<span>{getDataFromKey(PRODUCT_DETAIL_TITLE, key)}</span>
								<Row key={key}>
									{product1 && (
										<Col span={colSpan}>{getDataFromKey(product1, key)}</Col>
									)}
									{product2 && (
										<Col span={colSpan}>{getDataFromKey(product2, key)}</Col>
									)}
									{product3 && (
										<Col span={colSpan}>{getDataFromKey(product3, key)}</Col>
									)}
								</Row>
							</div>
						))}
					</>
				),
			},
		];
	}, [product1, product2, product3, colSpan]);

	return (
		<div className={styles.wrapper}>
			<h4 className={styles.title}>So sánh sản phẩm</h4>

			<button
				className={styles.addProductBtn}
				onClick={() =>
					showComparisonModal(!product1 ? "1" : !product2 ? "2" : "3")
				}
			>
				<span>
					<IconPlus />
				</span>
				Thêm sản phẩm
			</button>
			<Row className={styles.slotRow}>
				{product1 && (
					<Col span={colSpan}>
						<ComparisonSlot slotId="1" product={product1} />
					</Col>
				)}
				{product2 && (
					<Col span={colSpan}>
						<ComparisonSlot slotId="2" product={product2} />
					</Col>
				)}
				{product3 && (
					<Col span={colSpan}>
						<ComparisonSlot slotId="3" product={product3} />
					</Col>
				)}
			</Row>

			<Collapse
				items={items}
				expandIcon={({isActive}) => (
					<IconChevronDown
						className={clsx(styles.collapseIcon, isActive && styles.iconActive)}
					/>
				)}
				expandIconPosition="end"
				defaultActiveKey={items.map((item) => item.key!)}
				className={styles.collapse}
				onChange={onChange}
			/>
		</div>
	);
}
