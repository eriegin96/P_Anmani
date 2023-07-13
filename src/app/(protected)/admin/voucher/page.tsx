"use client";

import {Button} from "antd";
import styles from "./voucher.module.scss";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import VoucherTable from "./_components/VoucherTable";

export default function AdminProductPage() {
	return (
		<>
			<div className={styles.actionWrapper}>
				<Link href={ROUTE.ADMIN_VOUCHER_CREATE}>
					<Button type="primary">Tạo Voucher</Button>
				</Link>
			</div>

			<VoucherTable />
		</>
	);
}
