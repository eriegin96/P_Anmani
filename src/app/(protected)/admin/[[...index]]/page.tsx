"use client";

import {
	exploreVideoList,
	productList,
	userCartList,
	voucherList,
} from "@/mock/data";
import {Card, Col, Row, Statistic} from "antd";

export default function AdminPage() {
	return (
		<div>
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Card>
						<Statistic title="Tổng đơn hàng" value={userCartList.length} />
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic title="Tổng sản phẩm" value={productList.length} />
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic title="Tổng voucher" value={voucherList.length} />
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Tổng video Khám phá"
							value={exploreVideoList.length}
						/>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
