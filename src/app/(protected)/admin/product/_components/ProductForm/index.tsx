"use client";

import {Button, Form} from "antd";
import {useParams, useRouter} from "next/navigation";
import {useEffect} from "react";
import {TProduct} from "@/types/product.type";
import {productList} from "@/mock/data";
import FormBasicInfo from "../FormBasicInfo";
import FormCategory from "../FormCategory";
import FormInformation from "../FormInformation";
import FormLocation from "../FormLocation";
import FormPolicy from "../FormPolicy";
import FormDescription from "../FormDescription";
import FormImage from "../FormImage";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {
	useCreateProduct,
	useGetProductById,
	useUpdateProduct,
} from "@/hooks/api/product";

type TProductFormProps = {
	isEditing?: boolean;
};

export default function ProductForm({isEditing = false}: TProductFormProps) {
	const [form] = Form.useForm<TProduct>();
	const router = useRouter();
	const {id} = useParams();
	const {data} = useGetProductById(id);
	const {trigger: createProduct, isMutating: isCreating} = useCreateProduct();
	const {trigger: updateProduct, isMutating: isUpdating} = useUpdateProduct(id);

	const handleSubmit = (values: TProduct) => {
		const lat = Number(values.location.lat);
		const lng = Number(values.location.lng);
		const newValues = {
			...values,
			location: {...values.location, lat, lng},
		};
		console.log(newValues);

		isEditing ? updateProduct(newValues) : createProduct(newValues);
	};

	useEffect(() => {
		form.setFieldsValue({...data});
	}, [data]);

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
				<Button
					type="primary"
					htmlType="submit"
					loading={isEditing ? isUpdating : isCreating}
				>
					{isEditing ? "Sửa" : "Tạo"} bất động sản
				</Button>
			</div>
		</Form>
	);
}
