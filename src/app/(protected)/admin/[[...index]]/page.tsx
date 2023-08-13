"use client";

import {useGetCarts} from "@/hooks/api/cart";
import {useGetExplores} from "@/hooks/api/explore";
import {useGetProducts} from "@/hooks/api/product";
import {useGetVouchers} from "@/hooks/api/voucher";
import {
	exploreVideoList,
	productList,
	userCartList,
	voucherList,
} from "@/mock/data";
import {Card, Col, Row, Statistic} from "antd";

export default function AdminPage() {
	const {data: userCartList} = useGetCarts();
	const {data: productList} = useGetProducts();
	const {data: voucherList} = useGetVouchers();
	const {data: exploreVideoList} = useGetExplores();

	return (
		<div>
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Card>
						<Statistic title="Tổng đơn hàng" value={userCartList?.length} />
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic title="Tổng sản phẩm" value={productList?.length} />
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic title="Tổng voucher" value={voucherList?.length} />
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Tổng video Khám phá"
							value={exploreVideoList?.length}
						/>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
