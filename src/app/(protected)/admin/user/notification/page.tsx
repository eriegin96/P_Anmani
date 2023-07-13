"use client";

import {Button} from "antd";
import Link from "next/link";
import {ROUTE} from "@/constants/route";
import NotificationTable from "../_components/NotificationTable";
import styles from "../../_shared/page.module.scss";

export default function AdminUserNotificationPage() {
	return (
		<>
			<div className={styles.actionWrapper}>
				<Link href={ROUTE.ADMIN_USER_NOTIFICATION_CREATE}>
					<Button type="primary">Tạo thông báo chung</Button>
				</Link>
			</div>

			<NotificationTable />
		</>
	);
}
