"use client";

import {Button, Form} from "antd";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {TProduct} from "@/types/product.type";
import {productList} from "@/mock/data";
import FormBasicInfo from "../FormBasicInfo";
import FormCategory from "../FormCategory";
import FormInformation from "../FormInformation";
import FormLocation from "../FormLocation";
import FormPolicy from "../FormPolicy";
import FormDescription from "../FormDescription";
import styles from "./productForm.module.scss";
import FormImage from "../FormImage";

type TProductFormProps = {
	id?: string;
};

export default function ProductForm({id}: TProductFormProps) {
	const [form] = Form.useForm<TProduct>();
	const router = useRouter();
	const isLoading = false;

	const handleSubmit = (values: TProduct) => {
		console.log(values);
	};

	useEffect(() => {
		const fieldValue = productList.find((product) => product.id === id);

		form.setFieldsValue({...fieldValue});
		console.log(fieldValue);
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
				{id ? "Sửa thông tin" : "Tạo"} bất động sản
			</h3>
			<label>Thông tin chung</label>
			<FormBasicInfo />

			<label>Phân loại BĐS</label>
			<FormCategory />

			<label>Thông tin tiện ích</label>
			<FormInformation />

			<label>Địa điểm</label>
			<FormLocation />

			<label>Chính sách</label>
			<FormPolicy />

			<label>Mô tả</label>
			<FormDescription />

			<label>Hình ảnh</label>
			<FormImage />

			<div className={styles.actionWrapper}>
				<Button danger onClick={() => router.back()}>
					Hủy
				</Button>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					{id ? "Sửa" : "Tạo"} bất động sản
				</Button>
			</div>
		</Form>
	);
}
