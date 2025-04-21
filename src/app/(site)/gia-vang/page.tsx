"use client";

import {Table} from "antd";
import {TradingViewWidget} from "../_components";
import styles from "./giaVang.module.scss";
import {goldColumns, goldData, TGoldTable} from "./static";
import {formatFulldate} from "@/utils/formatDate";
import {useEffect, useState} from "react";
import {useLayoutContext} from "@/providers/LayoutProvider";

export default function Page() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000 * 60);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title}>TIỆM VÀNG NGUYỄN HƯNG</h2>
				<h4 className={styles.text}>MỸ THỚI, CÁI SAO, LX, AG</h4>
				<h4 className={styles.text}>KÍNH CHÀO QUÝ KHÁCH</h4>
				<h4 className={styles.text}>TCCS 01:2024/T.TH</h4>
				<div className={styles.date}>{formatFulldate(date)}</div>
			</div>
			<div className={styles.tableWrapper}>
				<Table<TGoldTable>
					bordered
					columns={goldColumns}
					dataSource={goldData}
					pagination={false}
					className={styles.table}
				/>
				<div className={styles.chart}>
					<TradingViewWidget />
				</div>
			</div>
		</div>
	);
}
