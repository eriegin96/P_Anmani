"use client";

import {Button, Form} from "antd";
import {useParams, useRouter} from "next/navigation";
import {useEffect} from "react";
import FormVoucherInfo from "../FormVoucherInfo";
import {TVoucher} from "@/types/voucher.type";
import dayjs from "dayjs";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {
	useCreateVoucher,
	useGetVoucherById,
	useUpdateVoucher,
} from "@/hooks/api/voucher";
import {ROUTE} from "@/constants/route";

type TVoucherFormProps = {
	isEditing?: boolean;
};

type TVoucherForm = TVoucher | {expire: dayjs.Dayjs};

export default function VoucherForm({isEditing = false}: TVoucherFormProps) {
	const [form] = Form.useForm<TVoucherForm>();
	const router = useRouter();
	const {id} = useParams();
	const {data: voucher} = useGetVoucherById(id);
	const {
		trigger: createVoucher,
		isMutating: isCreating,
		data: dataCreate,
	} = useCreateVoucher();
	const {
		trigger: updateVoucher,
		isMutating: isUpdating,
		data: dataUpdate,
	} = useUpdateVoucher(id);

	const handleSubmit = (values: TVoucherForm) => {
		const expire = (values.expire as dayjs.Dayjs).toISOString();
		const dataBody = {...values, expire} as TVoucher;

		isEditing ? updateVoucher(dataBody) : createVoucher(dataBody);
	};

	useEffect(() => {
		form.setFieldsValue({
			...voucher,
			option: voucher?.option ?? "amount",
			expire: voucher?.["expire"]
				? dayjs(voucher["expire"])
				: dayjs(new Date()),
		});
	}, [voucher, id, form]);

	useEffect(() => {
		if (dataCreate || dataUpdate) router.push(ROUTE.ADMIN_VOUCHER);
	}, [dataCreate, dataUpdate, router]);

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
