"use client";

import {Button} from "antd";
import ProductTable from "./_components/ProductTable";
import styles from "./product.module.scss";

export default function AdminProductPage() {
	return (
		<>
			<div className={styles.actionWrapper}>
				<Button type="primary">Tạo BĐS</Button>
			</div>

			<ProductTable />
		</>
	);
}
