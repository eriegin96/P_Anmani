"use client";

import {Button, Form, message} from "antd";
import {useParams, useRouter} from "next/navigation";
import {useEffect} from "react";
import {TProduct} from "@/types/product.type";
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
import {ROUTE} from "@/constants/route";
import {INVESTOR} from "@/constants/investor";
import dayjs from "dayjs";
import FormUtility from "../FormUtility";

type TProductFormProps = {
	isEditing?: boolean;
};
type TProductForm = Omit<TProduct, "discountStartDate" | "discountEndDate"> & {
	discountEndDate: dayjs.Dayjs;
	discountStartDate: dayjs.Dayjs;
};

export default function ProductForm({isEditing = false}: TProductFormProps) {
	const [form] = Form.useForm<TProductForm>();
	const router = useRouter();
	const {id} = useParams();
	const {data: product} = useGetProductById(id);
	const {
		trigger: createProduct,
		isMutating: isCreating,
		data: dataCreate,
	} = useCreateProduct();
	const {
		trigger: updateProduct,
		isMutating: isUpdating,
		data: dataUpdate,
	} = useUpdateProduct(id);

	const handleSubmit = (values: TProductForm) => {
		const lat = Number(values.location.lat);
		const lng = Number(values.location.lng);
		const price = Number(values.price);
		const originalPrice = Number(values.originalPrice);
		const newValues = {
			...values,
			location: {...values.location, lat, lng},
			investor: {
				name: values.investor.name,
				logo: INVESTOR[values.investor.name].logo,
			},
			price,
			originalPrice,
			discountStartDate: values.discountStartDate.toISOString(),
			discountEndDate: values.discountEndDate.toISOString(),
		};

		isEditing ? updateProduct(newValues) : createProduct(newValues);
	};

	useEffect(() => {
		const discountEndDate = product?.discountEndDate
			? dayjs(product?.discountEndDate)
			: dayjs(new Date());
		const discountStartDate = product?.discountStartDate
			? dayjs(product?.discountStartDate)
			: dayjs(new Date());

		form.setFieldsValue({...product, discountStartDate, discountEndDate});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product]);

	useEffect(() => {
		if (dataCreate || dataUpdate) router.push(ROUTE.ADMIN_PRODUCT);
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
				{id ? "Sửa thông tin" : "Tạo"} bất động sản
			</h3>
			<label>Thông tin chung</label>
			<FormBasicInfo />

			<label>Phân loại BĐS</label>
			<FormCategory />

			<label>Thông số</label>
			<FormInformation />

			<label>Tiện ích</label>
			<FormUtility />

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
