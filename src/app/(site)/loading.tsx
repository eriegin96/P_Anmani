"use client";

import {Spin} from "antd";
import styles from "./page.module.scss";

export default function Loading() {
	return <Spin className={styles.spin} />;
}
