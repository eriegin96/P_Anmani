"use client";

import {Button} from "antd";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import VoucherTable from "./_components/VoucherTable";
import styles from "../_shared/page.module.scss";

export default function AdminVoucherPage() {
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
