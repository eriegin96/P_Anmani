"use client";

import {Button, Form} from "antd";
import {useParams, useRouter} from "next/navigation";
import {useEffect} from "react";
import {exploreVideoList} from "@/mock/data";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {TExploreVideo} from "@/types/video.type";
import FormExploreInfo from "../FormExploreInfo";
import {
	useCreateExplore,
	useGetExploreById,
	useUpdateExplore,
} from "@/hooks/api/explore";

type TExploreFormProps = {
	isEditing?: boolean;
};

export default function ExploreForm({isEditing = false}: TExploreFormProps) {
	const [form] = Form.useForm<TExploreVideo>();
	const router = useRouter();
	const {id} = useParams();
	const {data} = useGetExploreById(id);
	const {trigger: createExplore, isMutating: isCreating} = useCreateExplore();
	const {trigger: updateExplore, isMutating: isUpdating} = useUpdateExplore(id);

	const handleSubmit = (values: TExploreVideo) => {
		console.log({...values});
		isEditing ? updateExplore(values) : createExplore(values);
	};

	useEffect(() => {
		const fieldsValue = data && exploreVideoList.find((noti) => noti.id === id);
		form.setFieldsValue({...fieldsValue});
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
				{id ? "Sửa thông tin" : "Tạo"} Khám phá
			</h3>
			<label>Thông tin chung</label>
			<FormExploreInfo />

			<div className={styles.actionWrapper}>
				<Button danger onClick={() => router.back()}>
					Hủy
				</Button>
				<Button
					type="primary"
					htmlType="submit"
					loading={isEditing ? isUpdating : isCreating}
				>
					{isEditing ? "Sửa" : "Tạo"} Khám phá
				</Button>
			</div>
		</Form>
	);
}
