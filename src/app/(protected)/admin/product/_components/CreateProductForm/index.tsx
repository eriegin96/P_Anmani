"use client";

import {Button, Col, Form, Input, InputNumber, Row, Select} from "antd";
import styles from "./createProductForm.module.scss";
import {
	locationOptions,
	investorOptions,
	tagOptions,
	typeOptions,
	statusOptions,
} from "@/constants/selectOptions";
import {IconPlus} from "@tabler/icons-react";
import {IconMinus} from "@tabler/icons-react";
import {NUMBER_FORMAT} from "@/constants/common";
import {useRouter} from "next/navigation";

interface CreateProductFormData {
	name: string;
	email: string;
	password: string;
}
type Props = {};

export default function CreateProductForm({}: Props) {
	const [form] = Form.useForm();
	const router = useRouter();
	const isLoading = false;

	const handleSubmit = (values: CreateProductFormData) => {
		console.log(values);
	};
	const onGenderChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<Form
			layout="vertical"
			form={form}
			onFinish={handleSubmit}
			className={styles.form}
		>
			<h3 className={styles.formTitle}>Tạo bất động sản</h3>
			<label>Thông tin chung</label>
			<Row gutter={20}>
				<Col span={24}>
					<Form.Item
						name="name"
						label="Tên"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="Căn hộ Nha Trang" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						name="status"
						label="Trạng thái BĐS"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Select
							placeholder="Vui lòng chọn trạng thái của BĐS"
							onChange={onGenderChange}
							allowClear
							options={statusOptions}
						/>
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						name="price"
						label="Giá gốc"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<InputNumber
							step={1_000_000}
							formatter={(value) => `VND ${value}`.replace(NUMBER_FORMAT, ".")}
							parser={(value) => Number(value!.replace(/VND\s?|(\.*)/g, ""))}
							className={styles.inputNumber}
						/>
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item
						name="salePrice"
						label="Giá khi giảm"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<InputNumber
							step={1_000_000}
							formatter={(value) => `VND ${value}`.replace(NUMBER_FORMAT, ".")}
							parser={(value) => Number(value!.replace(/VND\s?|(\.*)/g, ""))}
							className={styles.inputNumber}
						/>
					</Form.Item>
				</Col>
			</Row>

			<label>Phân loại BĐS</label>
			<Row gutter={20}>
				<Col span={6}>
					<Form.Item
						name="tag"
						label="Hình thức bán/cho thuê"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Select
							placeholder="Vui lòng chọn hình thức bán/cho thuê"
							onChange={onGenderChange}
							allowClear
							options={tagOptions}
						/>
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						name="type"
						label="Loại hình"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Select
							placeholder="Vui lòng chọn loại hình"
							onChange={onGenderChange}
							allowClear
							options={typeOptions}
						/>
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						name="investor"
						label="Chủ đầu tư"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Select
							placeholder="Vui lòng chọn chủ đầu tư"
							onChange={onGenderChange}
							allowClear
							options={investorOptions}
						/>
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						name={["location", "main"]}
						label="Khu vực"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Select
							placeholder="Vui lòng chọn khu vực"
							onChange={onGenderChange}
							allowClear
							options={locationOptions}
						/>
					</Form.Item>
				</Col>
			</Row>

			<label>Thông tin tiện ích</label>
			<Row gutter={10}>
				<Col span={4}>
					<Form.Item
						name={["information", "landArea"]}
						label="Diện tích đất"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="165m2" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name={["information", "floorArea"]}
						label="Diện tích sàn"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="165m2" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name={["information", "floor"]}
						label="Số tầng"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="5 tầng" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name={["information", "bedroom"]}
						label="Số phòng ngủ"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="4 phòng ngủ - 2 hồ bơi" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name={["information", "bathroom"]}
						label="Số phòng tắm"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="3 phòng tắm" />
					</Form.Item>
				</Col>
				<Col span={4}>
					<Form.Item
						name={["information", "other"]}
						label="Tiện ích khác"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="Đơn giá" />
					</Form.Item>
				</Col>
			</Row>

			<label>Địa điểm</label>
			<Row gutter={20}>
				<Col span={24}>
					<Form.Item
						name={["location", "detail"]}
						label="Vị trí"
						rules={[
							{required: true, message: "Trường này không được để trống"},
						]}
					>
						<Input placeholder="Số nhà, đường, phường" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.List
						name={["location", "nearby"]}
						rules={[
							{
								validator: async (_, names) => {
									if (!names || names.length < 1) {
										return Promise.reject(
											new Error("Ít nhất 1 địa điểm lân cận")
										);
									}
								},
							},
						]}
					>
						{(fields, {add, remove}, {errors}) => (
							<Form.Item label="Địa điểm lân cận">
								{fields.map(({key, name, ...restField}) => (
									<Form.Item
										required={false}
										key={key}
										className={styles.formListItem}
									>
										<Form.Item
											{...restField}
											name={[name, "name"]}
											validateTrigger={["onChange", "onBlur"]}
											rules={[
												{
													required: true,
													whitespace: true,
													message: "Vui lòng nhập tên địa điểm",
												},
											]}
											noStyle
										>
											<Input placeholder="Tên địa điểm" />
										</Form.Item>
										<Form.Item
											{...restField}
											name={[name, "distance"]}
											validateTrigger={["onChange", "onBlur"]}
											rules={[
												{
													required: true,
													whitespace: true,
													message: "Vui lòng nhập khoảng cách",
												},
											]}
											noStyle
										>
											<Input placeholder="Khoảng cách" />
										</Form.Item>
										<Button shape="circle" danger onClick={() => remove(name)}>
											<IconMinus />
										</Button>
									</Form.Item>
								))}

								<Button
									type="dashed"
									onClick={() => add()}
									icon={<IconPlus />}
									className={styles.addLocationBtn}
								>
									Thêm địa điểm lân cận
								</Button>
								<Form.ErrorList errors={errors} />
							</Form.Item>
						)}
					</Form.List>
				</Col>
				<Col span={12}>
					<Form.List
						name={["location", "popular"]}
						rules={[
							{
								validator: async (_, names) => {
									if (!names || names.length < 1) {
										return Promise.reject(
											new Error("Ít nhất 1 địa điểm phổ biến")
										);
									}
								},
							},
						]}
					>
						{(fields, {add, remove}, {errors}) => (
							<Form.Item label="Địa điểm phổ biến">
								{fields.map(({key, name, ...restField}) => (
									<Form.Item
										required={false}
										key={key}
										className={styles.formListItem}
									>
										<Form.Item
											{...restField}
											name={[name, "name"]}
											validateTrigger={["onChange", "onBlur"]}
											rules={[
												{
													required: true,
													whitespace: true,
													message: "Vui lòng nhập tên địa điểm",
												},
											]}
											noStyle
										>
											<Input placeholder="Tên địa điểm" />
										</Form.Item>
										<Form.Item
											{...restField}
											name={[name, "distance"]}
											validateTrigger={["onChange", "onBlur"]}
											rules={[
												{
													required: true,
													whitespace: true,
													message: "Vui lòng nhập khoảng cách",
												},
											]}
											noStyle
										>
											<Input placeholder="Khoảng cách" />
										</Form.Item>
										<Button shape="circle" danger onClick={() => remove(name)}>
											<IconMinus />
										</Button>
									</Form.Item>
								))}

								<Button
									type="dashed"
									onClick={() => add()}
									icon={<IconPlus />}
									className={styles.addLocationBtn}
								>
									Thêm địa điểm phổ biến
								</Button>
								<Form.ErrorList errors={errors} />
							</Form.Item>
						)}
					</Form.List>
				</Col>
			</Row>

			<label>Chính sách</label>
			<Row gutter={20}>
				<Col span={24}>
					<Form.Item name={["policy", "main"]} label="Chính sách chung">
						<Input.TextArea autoSize={{minRows: 3}} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item name={["policy", "loan"]} label="Chính sách vay">
						<Input.TextArea autoSize={{minRows: 3}} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item name={["policy", "equity"]} label="Chính sách vốn">
						<Input.TextArea autoSize={{minRows: 3}} />
					</Form.Item>
				</Col>
			</Row>

			<label>Mô tả</label>
			<Row gutter={20}>
				<Col span={12}>
					<Form.Item name={["description", "pros"]} label="Ưu điểm">
						<Input.TextArea autoSize={{minRows: 3}} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item name={["description", "cons"]} label="Nhược điểm">
						<Input.TextArea autoSize={{minRows: 3}} />
					</Form.Item>
				</Col>
			</Row>

			<div className={styles.actionWrapper}>
				<Button danger onClick={() => router.back()}>
					Hủy
				</Button>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					Tạo bất động sản
				</Button>
			</div>
		</Form>
	);
}
