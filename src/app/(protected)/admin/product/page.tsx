"use client";

import {Button} from "antd";
import ProductTable from "./_components/ProductTable";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import styles from "../_shared/page.module.scss";

export default function AdminProductPage() {
	return (
		<>
			<div className={styles.actionWrapper}>
				<Link href={ROUTE.ADMIN_PRODUCT_CREATE}>
					<Button type="primary">Tạo BĐS</Button>
				</Link>
			</div>

			<ProductTable />
		</>
	);
}
