"use client";

import {Button, Form} from "antd";
import {useParams, useRouter} from "next/navigation";
import {useEffect} from "react";
import FormVoucherInfo from "../FormVoucherInfo";
import {voucherList} from "@/mock/data";
import {TVoucher} from "@/types/voucher.type";
import dayjs from "dayjs";
import {DATE_FORMAT} from "@/constants/common";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {
	useCreateVoucher,
	useGetVoucherById,
	useUpdateVoucher,
} from "@/hooks/api/voucher";

type TVoucherFormProps = {
	isEditing?: boolean;
};

type TVoucherForm = TVoucher | {expiredDate: dayjs.Dayjs};

export default function VoucherForm({isEditing = false}: TVoucherFormProps) {
	const [form] = Form.useForm<TVoucherForm>();
	const router = useRouter();
	const {id} = useParams();
	const {data} = useGetVoucherById(id);
	const {trigger: createVoucher, isMutating: isCreating} = useCreateVoucher();
	const {trigger: updateVoucher, isMutating: isUpdating} = useUpdateVoucher(id);

	const handleSubmit = (values: TVoucherForm) => {
		const expiredDate = (values.expiredDate as dayjs.Dayjs).format(DATE_FORMAT);
		const dataBody = {...values, expiredDate} as TVoucher;

		console.log(dataBody);
		isEditing ? updateVoucher(dataBody) : createVoucher(dataBody);
	};

	useEffect(() => {
		const fieldsValue =
			data && voucherList.find((voucher) => voucher.id === id);
		form.setFieldsValue({
			...fieldsValue,
			discountOption: fieldsValue?.discountOption ?? "amount",
			expiredDate: fieldsValue?.["expiredDate"]
				? dayjs(fieldsValue?.["expiredDate"], DATE_FORMAT)
				: dayjs(new Date()),
		});
		console.log(fieldsValue);
	}, [data, id, form]);

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
				<Button
					type="primary"
					htmlType="submit"
					loading={isEditing ? isUpdating : isCreating}
				>
					{isEditing ? "Sửa" : "Tạo"} Voucher
				</Button>
			</div>
		</Form>
	);
}
