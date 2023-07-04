"use client";

import {DatePicker, Input, Select} from "antd";
import styles from "./thongTin.module.scss";
import {IconCalendar, IconMail, IconPhone, IconUser} from "@tabler/icons-react";
import type {DatePickerProps} from "antd";
import {DATE_FORMAT} from "@/constants/common";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../../../../../components/Button"));

export default function Page() {
	const handleChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
		console.log(date, dateString);
	};

	const handleChangeGender = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<div>
			<div className={styles.inputWrapper}>
				<span>Họ và tên</span>
				<Input prefix={<IconUser size={20} />} placeholder="Nguyễn Văn A" />
			</div>
			<div className={styles.inputWrapper}>
				<span>Số điện thoại</span>
				<Input prefix={<IconPhone size={20} />} placeholder="0123 456 789" />
			</div>
			<div className={styles.inputWrapper}>
				<span>Email</span>
				<Input prefix={<IconMail size={20} />} placeholder="email@email.com" />
			</div>
			<div className={styles.lastSection}>
				<div className={styles.inputWrapper}>
					<span>Ngày sinh</span>
					<DatePicker
						onChange={handleChangeDate}
						placeholder={DATE_FORMAT}
						suffixIcon={<IconCalendar size={20} />}
						format={DATE_FORMAT}
					/>
				</div>
				<div className={styles.inputWrapper}>
					<span>Giới tính</span>
					<Select
						defaultValue="male"
						onChange={handleChangeGender}
						options={[
							{value: "male", label: "Nam"},
							{value: "female", label: "Nữ"},
						]}
						placeholder="Nam"
					/>
				</div>
			</div>

			<Button className={styles.button}>Cập nhật</Button>
		</div>
	);
}
