import {DatePicker, Input} from "antd";
import styles from "./consultForm.module.scss";
import {Button} from "@/components";
import type {DatePickerProps} from "antd/es/date-picker";
import {useCreateCart} from "@/hooks/api/cart/mutation/useCreateCart";
import {useState} from "react";
import {useCartContext} from "@/providers/CartProvider";

export default function ConsultForm() {
	const {trigger} = useCreateCart();
	const {cart} = useCartContext();
	const [date, setDate] = useState("");
	const [place, setPlace] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = () => {
		console.log({place, phoneNumber, date});
		trigger({
			cartList: cart,
			bookingInfo: {userId: "user-1", date, place, phoneNumber},
		});
	};

	const onDateChange = (
		value: DatePickerProps["value"],
		dateString: string
	) => {
		console.log("Selected Time: ", value);
		console.log("Formatted Selected Time: ", dateString);
		setDate(dateString);
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
					value={place}
					onChange={(e) => setPlace(e.target.value)}
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
