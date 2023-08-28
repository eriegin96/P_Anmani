import {DATE_FORMAT, NUMBER_FORMAT} from "@/constants/common";
import {statusOptions} from "@/constants/selectOptions";
import {Col, DatePicker, Form, Input, InputNumber, Row, Select} from "antd";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {defaultFormConfig} from "@/app/(protected)/admin/_shared/config";

export default function FormBasicInfo() {
	const onStatusChange = (value: string) => {
		console.log(`status ${value}`);
	};

	return (
		<Row gutter={20}>
			<Col span={24}>
				<Form.Item name="name" label="Tên" {...defaultFormConfig}>
					<Input placeholder="Căn hộ Nha Trang" />
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item name="status" label="Trạng thái BĐS" {...defaultFormConfig}>
					<Select
						placeholder="Vui lòng chọn trạng thái của BĐS"
						onChange={onStatusChange}
						allowClear
						options={statusOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item name="originalPrice" label="Giá gốc" {...defaultFormConfig}>
					<InputNumber
						step={1_000_000}
						formatter={(value) => `VND ${value}`.replace(NUMBER_FORMAT, ".")}
						parser={(value) => Number(value!.replace(/VND\s?|(\.*)/g, ""))}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item name="price" label="Giá khi giảm" {...defaultFormConfig}>
					<InputNumber
						step={1_000_000}
						formatter={(value) => `VND ${value}`.replace(NUMBER_FORMAT, ".")}
						parser={(value) => Number(value!.replace(/VND\s?|(\.*)/g, ""))}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name="discountStartDate"
					label="Ngày bắt đầu giảm giá"
					rules={[
						{
							type: "object" as const,
							required: true,
							message: "Trường này không được để trống",
						},
					]}
				>
					<DatePicker placement="bottomLeft" format={DATE_FORMAT} />
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name="discountEndDate"
					label="Ngày kết thúc giảm giá"
					rules={[
						{
							type: "object" as const,
							required: true,
							message: "Trường này không được để trống",
						},
					]}
				>
					<DatePicker placement="bottomLeft" format={DATE_FORMAT} />
				</Form.Item>
			</Col>
		</Row>
	);
}
