"use client";

import {Button, Form} from "antd";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {exploreVideoList} from "@/mock/data";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {TExploreVideo} from "@/types/video.type";
import FormExploreInfo from "../FormExploreInfo";

type TExploreFormProps = {
	id?: string;
};

export default function ExploreForm({id}: TExploreFormProps) {
	const [form] = Form.useForm<TExploreVideo>();
	const router = useRouter();
	const isLoading = false;

	const handleSubmit = (values: TExploreVideo) => {
		console.log({...values});
	};

	useEffect(() => {
		const fieldsValue = exploreVideoList.find((noti) => noti.id === id);
		form.setFieldsValue({...fieldsValue});
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
				{id ? "Sửa thông tin" : "Tạo"} Khám phá
			</h3>
			<label>Thông tin chung</label>
			<FormExploreInfo />

			<div className={styles.actionWrapper}>
				<Button danger onClick={() => router.back()}>
					Hủy
				</Button>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					{id ? "Sửa" : "Tạo"} Khám phá
				</Button>
			</div>
		</Form>
	);
}
