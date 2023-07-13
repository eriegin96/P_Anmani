"use client";

import {productList, userCartList, userList, voucherList} from "@/mock/data";
import {TUserCart} from "@/types/user.type";
import {Descriptions} from "antd";
import {useParams} from "next/navigation";
import {Typography} from "antd";
import styles from "./[id].module.scss";
import {TProduct} from "@/types/product.type";
import {formatCurrency} from "@/utils/formatCurrency";

const {Title} = Typography;

export default function AdminUserCartPage() {
	const {id} = useParams();
	const {
		bookingInfo: {userId, phoneNumber, date, place},
		cartList,
	} = userCartList.find((cart) => cart.id === id) as TUserCart;
	const userName = userList.find((user) => user.id === userId)?.name;
	const cartProductList = cartList.map((cartItem) => ({
		key: cartItem.id,
		product: productList.find(
			(product) => product.id === cartItem.productId
		) as TProduct,
		voucherList: voucherList.filter((voucher) =>
			cartItem.voucherAdded.includes(voucher.id)
		),
	}));

	return (
		<div>
			<Title level={3} type="success">
				Đơn hàng {id}
			</Title>

			<Descriptions title="Thông tin khách hàng">
				<Descriptions.Item label="Tên Khách hàng">{userName}</Descriptions.Item>
				<Descriptions.Item label="Số điện thoại">
					{phoneNumber}
				</Descriptions.Item>
				<Descriptions.Item label="Địa điểm">{place}</Descriptions.Item>
				<Descriptions.Item label="Thời gian">{date}</Descriptions.Item>
			</Descriptions>

			<Title level={4}>Thông tin giỏ hàng</Title>
			{cartProductList.map(
				(
					{
						key,
						product: {
							name,
							price,
							location: {detail},
						},
						voucherList,
					},
					index
				) => (
					<Descriptions
						title={`Sản phẩm ${index + 1}`}
						bordered
						key={key}
						className={styles.descriptions}
					>
						<Descriptions.Item label="Tên sản phẩm">{name}</Descriptions.Item>
						<Descriptions.Item label="Giá tiền">
							{formatCurrency(price)}
						</Descriptions.Item>
						<Descriptions.Item label="Vị trí">{detail}</Descriptions.Item>
						<Descriptions.Item label="Voucher áp dụng">
							{voucherList.map(({id, discount, discountOption, condition}) => (
								<li key={id}>
									<span>
										{discountOption === "amount"
											? formatCurrency(discount.amount)
											: `${discount.percent}%`}
									</span>{" "}
									- <span>{condition}</span>
								</li>
							))}
						</Descriptions.Item>
					</Descriptions>
				)
			)}
		</div>
	);
}
