import {DatePicker, Input} from "antd";
import styles from "./consultForm.module.scss";
import {Button} from "@/components";
import type {DatePickerProps} from "antd/es/date-picker";
import {useCreateCart} from "@/hooks/api/cart/mutation/useCreateCart";
import {useEffect, useState} from "react";
import {useAuthContext} from "@/providers/AuthProvider";
import {CART_STATUS} from "@/constants/cart";
import {useParams} from "next/navigation";
import {useCartContext} from "@/providers/CartProvider";
import {TUpdateCart, useUpdateCart} from "@/hooks/api/cart";
import {useGetProductById} from "@/hooks/api/product";
import {useModalContext} from "@/providers/ModalProvider";
import {useGetVouchersByProductId} from "@/hooks/api/voucher";

export default function ConsultForm() {
	const {id: productId} = useParams();
	const {cart, checkedList, totalPrice} = useCartContext();
	const {userInfo} = useAuthContext();
	const {data: product} = useGetProductById(productId);
	const {data: vouchers} = useGetVouchersByProductId(productId);
	const {hideBookingModal} = useModalContext();
	const {trigger: createCart, data: dataCreateCart} = useCreateCart();
	const {trigger: updateCart, data: dataUpdateCart} = useUpdateCart();
	const [date, setDate] = useState("");
	const [meetingLocation, setMeetingLocation] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = () => {
		productId
			? createCart({
					userId: userInfo?.key,
					productId,
					voucherIds: vouchers?.map((voucher) => voucher.key),
					status: CART_STATUS.PROCESSING,
					date,
					meetingLocation,
					phoneNumber,
					price: product?.price ?? 1,
			  })
			: updateCart({
					userId: userInfo?.key,
					products: checkedList.map((id) => ({
						productId: cart.find((item) => item.key === id)?.productId,
						status: CART_STATUS.PROCESSING,
						date,
						meetingLocation,
						phoneNumber,
						price: totalPrice,
					})),
			  } as TUpdateCart);
	};

	const onDateChange = (
		value: DatePickerProps["value"],
		dateString: string
	) => {
		console.log("Selected Time: ", value);
		console.log("Formatted Selected Time: ", dateString);
		setDate(new Date(dateString).toISOString());
	};

	const onDateOk = (value: DatePickerProps["value"]) => {
		console.log("onOk: ", value);
	};

	useEffect(() => {
		if (dataCreateCart || dataUpdateCart) {
			hideBookingModal();
		}
	}, [dataCreateCart, dataUpdateCart, hideBookingModal]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.section}>
				<span>Anh/Chị chọn ngày</span>
				<DatePicker
					showTime
					onChange={onDateChange}
					onOk={onDateOk}
					className={styles.input}
				/>
			</div>
			<div className={styles.section}>
				<span>Địa điểm gặp mặt</span>
				<Input
					className={styles.input}
					value={meetingLocation}
					onChange={(e) => setMeetingLocation(e.target.value)}
				/>
			</div>
			<div className={styles.section}>
				<span>Điện thoại liên lạc hoặc zalo của Anh/Chị</span>
				<Input
					className={styles.input}
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
			</div>

			<Button className={styles.btn} onClick={handleSubmit}>
				Gửi
			</Button>
		</div>
	);
}
