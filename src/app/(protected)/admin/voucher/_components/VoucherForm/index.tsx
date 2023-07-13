"use client";

import {Button, Form} from "antd";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import FormVoucherInfo from "../FormVoucherInfo";
import {voucherList} from "@/mock/data";
import {TVoucher} from "@/types/voucher.type";
import dayjs from "dayjs";
import {DATE_FORMAT} from "@/constants/common";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";

type TVoucherFormProps = {
	id?: string;
};

type TVoucherForm = TVoucher | {expiredDate: dayjs.Dayjs};

export default function VoucherForm({id}: TVoucherFormProps) {
	const [form] = Form.useForm<TVoucherForm>();
	const router = useRouter();
	const isLoading = false;

	const handleSubmit = (values: TVoucherForm) => {
		const expiredDate = (values.expiredDate as dayjs.Dayjs).format(DATE_FORMAT);
		console.log({
			...values,
			expiredDate: expiredDate,
		});
	};

	useEffect(() => {
		const fieldsValue = voucherList.find((voucher) => voucher.id === id);
		form.setFieldsValue({
			...fieldsValue,
			discountOption: fieldsValue?.discountOption ?? "amount",
			expiredDate: fieldsValue?.["expiredDate"]
				? dayjs(fieldsValue?.["expiredDate"], DATE_FORMAT)
				: dayjs(new Date()),
		});
		console.log(fieldsValue);
	}, [id, form]);

	return (
		<Form
			layout="vertical"
			requiredMark="optional"
			form={form}
			onFinish={handleSubmit}
			className={styles.form}
		>
			<h3 className={styles.formTitle}>
				{id ? "Sửa thông tin" : "Tạo"} Voucher
			</h3>
			<label>Thông tin chung</label>
			<FormVoucherInfo />

			<div className={styles.actionWrapper}>
				<Button danger onClick={() => router.back()}>
					Hủy
				</Button>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					{id ? "Sửa" : "Tạo"} Voucher
				</Button>
			</div>
		</Form>
	);
}
