"use client";

import ExploreTable from "./_components/ExploreTable";
import {ROUTE} from "@/constants/route";
import styles from "../_shared/page.module.scss";
import {Button} from "antd";
import Link from "next/link";

export default function AdminExplorePage() {
	return (
		<>
			<div className={styles.actionWrapper}>
				<Link href={ROUTE.ADMIN_EXPLORE_CREATE}>
					<Button type="primary">Tạo Khám phá</Button>
				</Link>
			</div>

			<div>
				<ExploreTable />
			</div>
		</>
	);
}
