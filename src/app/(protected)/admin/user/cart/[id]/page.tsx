"use client";

import {Descriptions, Typography} from "antd";
import styles from "./[id].module.scss";
import {formatCurrency} from "@/utils/formatCurrency";
import {useGetCartById} from "@/hooks/api/cart/query/useGetCartById";
import Loading from "@/app/(site)/loading";

const {Title} = Typography;

type TAdminUserCartPageProps = {
	params: {id: string};
};

export default function AdminUserCartPage({
	params: {id},
}: TAdminUserCartPageProps) {
	const {data, isLoading} = useGetCartById(id);

	return (
		<>
			{isLoading && <Loading />}
			{data && (
				<div>
					<Title level={3} type="success">
						Đơn hàng {id}
					</Title>

					<Descriptions title="Thông tin khách hàng">
						<Descriptions.Item label="Tên Khách hàng">
							{data?.user.name}
						</Descriptions.Item>
						<Descriptions.Item label="Số điện thoại">
							{data?.phoneNumber}
						</Descriptions.Item>
						<Descriptions.Item label="Địa điểm">
							{data?.meetingLocation}
						</Descriptions.Item>
						<Descriptions.Item label="Thời gian">
							{data?.date}
						</Descriptions.Item>
					</Descriptions>

					<Title level={4}>Thông tin giỏ hàng</Title>

					<Descriptions
						// title={`Sản phẩm ${index + 1}`}
						bordered
						key={data?.key}
						className={styles.descriptions}
					>
						<Descriptions.Item label="Tên sản phẩm">
							{data?.product.name}
						</Descriptions.Item>
						<Descriptions.Item label="Giá tiền">
							{formatCurrency(data?.product.price)}
						</Descriptions.Item>
						<Descriptions.Item label="Vị trí">
							{data?.product.location.detail}
						</Descriptions.Item>
						<Descriptions.Item label="Voucher áp dụng">
							{data?.vouchers.map(
								({key, amount, percentage, option, condition}) => (
									<li key={key}>
										<span>
											{option === "amount"
												? formatCurrency(amount)
												: `${percentage}%`}
										</span>{" "}
										- <span>{condition}</span>
									</li>
								)
							)}
						</Descriptions.Item>
					</Descriptions>
				</div>
			)}
		</>
	);
}
