"use client";

import {Spin} from "antd";
import styles from "./page.module.scss";

export default function Loading() {
	return (
		<div className={styles.loadingWrapper}>
			<Spin size="large" />
		</div>
	);
}
