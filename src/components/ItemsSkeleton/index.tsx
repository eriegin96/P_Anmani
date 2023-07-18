"use client";

import {Col, Row, Skeleton} from "antd";
import styles from "./itemsSkeleton.module.scss";

export default function ItemsSkeleton() {
	return (
		<Row gutter={[16, 16]} className={styles.wrapper}>
			<Col xs={24} md={12} lg={6}>
				<Skeleton active />
			</Col>
			<Col xs={24} md={12} lg={6}>
				<Skeleton active />
			</Col>
			<Col xs={24} md={12} lg={6}>
				<Skeleton active />
			</Col>
			<Col xs={24} md={12} lg={6}>
				<Skeleton active />
			</Col>
		</Row>
	);
}
