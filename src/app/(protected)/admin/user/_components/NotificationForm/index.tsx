"use client";

import {Button, Form} from "antd";
import {useParams, useRouter} from "next/navigation";
import {useEffect} from "react";
import {notificationList} from "@/mock/data";
import {TNotification} from "@/types/notification.type";
import FormNotificationInfo from "../FormNotificationInfo";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {NOTIFICATION_TARGET_TYPE} from "@/constants/notification";
import {
	useCreateNotification,
	useGetNotificationById,
	useUpdateNotification,
} from "@/hooks/api/notification";

type TNotificationFormProps = {
	isEditing?: boolean;
};
type TNotificationForm = TNotification & {targetType: "all" | "individual"};

export default function NotificationForm({
	isEditing = false,
}: TNotificationFormProps) {
	const [form] = Form.useForm<TNotificationForm>();
	const router = useRouter();
	const {id} = useParams();
	const {data} = useGetNotificationById(id);
	const {trigger: createNotification, isMutating: isCreating} =
		useCreateNotification();
	const {trigger: updateNotification, isMutating: isUpdating} =
		useUpdateNotification(id);

	const handleSubmit = (values: TNotificationForm) => {
		const {targetType, ...rest} = values;
		const target =
			targetType === NOTIFICATION_TARGET_TYPE.ALL ? [] : values.target;
		console.log({...rest, target});
		isEditing
			? updateNotification({...rest, target})
			: createNotification({...rest, target});
	};

	useEffect(() => {
		const fieldsValue = data && notificationList.find((noti) => noti.id === id);
		form.setFieldsValue({
			...fieldsValue,
			targetType: fieldsValue?.target.length ? "individual" : "all",
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
				{id ? "Sửa thông tin" : "Tạo"} Thông báo {!id && "chung"}
			</h3>
			<label>Thông tin chung</label>
			<FormNotificationInfo />

			<div className={styles.actionWrapper}>
				<Button danger onClick={() => router.back()}>
					Hủy
				</Button>
				<Button
					type="primary"
					htmlType="submit"
					loading={isEditing ? isUpdating : isCreating}
				>
					{isEditing ? "Sửa" : "Tạo"} Thông báo {!id && "chung"}
				</Button>
			</div>
		</Form>
	);
}
