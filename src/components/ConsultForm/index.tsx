import {DatePicker, Input} from "antd";
import styles from "./consultForm.module.scss";
import {Button} from "@/components";
import type {DatePickerProps} from "antd/es/date-picker";
import {useCreateCart} from "@/hooks/api/cart/mutation/useCreateCart";
import {useState} from "react";
import {useAuthContext} from "@/providers/AuthProvider";
import {CART_STATUS} from "@/constants/cart";
import {useParams} from "next/navigation";
import {useCartContext} from "@/providers/CartProvider";
import {TRequestCart} from "@/types/user.type";

export default function ConsultForm() {
	const {id: productId} = useParams();
	const {checkedList} = useCartContext();
	const {userInfo} = useAuthContext();
	const {trigger} = useCreateCart();
	const [date, setDate] = useState("");
	const [meetingLocation, setMeetingLocation] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = () => {
		const products = productId
			? {
					productId,
					status: CART_STATUS.PROCESSING,
					date,
					meetingLocation,
					phoneNumber,
					price: 0,
			  }
			: checkedList.map((id) => ({
					productId: id,
					status: CART_STATUS.PROCESSING,
					date,
					meetingLocation,
					phoneNumber,
					price: 0,
			  }));

		trigger({
			userId: userInfo?.key,
			products,
		} as TRequestCart);
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
