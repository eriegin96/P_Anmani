import {DatePicker, Input} from "antd";
import styles from "./consultForm.module.scss";
import {Button} from "@/components";
import type {DatePickerProps} from "antd/es/date-picker";

export default function ConsultForm() {
	const onDateChange = (
		value: DatePickerProps["value"],
		dateString: [string, string] | string
	) => {
		console.log("Selected Time: ", value);
		console.log("Formatted Selected Time: ", dateString);
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
				<Input className={styles.input} />
			</div>
			<div className={styles.section}>
				<span>Điện thoại liên lạc hoặc zalo của Anh/Chị</span>
				<Input className={styles.input} />
			</div>

			<Button className={styles.btn}>Gửi</Button>
		</div>
	);
}
