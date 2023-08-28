import {
	Col,
	Form,
	Input,
	Row,
	Select,
	DatePicker,
	Radio,
	InputNumber,
} from "antd";
import {defaultFormConfig} from "../../../_shared/config";
import {DATE_FORMAT, NUMBER_FORMAT} from "@/constants/common";
import {typeOptions} from "@/constants/selectOptions";

export default function FormVoucherInfo() {
	const form = Form.useFormInstance();
	const option = Form.useWatch("option", form);

	return (
		<Row gutter={20}>
			<Col span={12}>
				<Form.Item
					name="productType"
					label="Voucher này thuộc về loại bđs"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn loại"
						allowClear
						options={typeOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item
					name="expire"
					label="Ngày hết hạn"
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
			<Col span={24}>
				<Form.Item name="condition" label="Điều kiện">
					<Input placeholder="Điều kiện giảm giá" />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item name="option" label="Giảm giá" {...defaultFormConfig}>
					<Radio.Group>
						<Radio value="amount">Số tiền</Radio>
						<Radio value="percentage">Phần trăm</Radio>
					</Radio.Group>
				</Form.Item>
			</Col>
			<Col span={12}>
				{option === "amount" ? (
					<Form.Item
						name="amount"
						label="Số tiền giảm giá"
						{...defaultFormConfig}
					>
						<InputNumber
							step={1_000_000}
							formatter={(value) => `VND ${value}`.replace(NUMBER_FORMAT, ".")}
							parser={(value) => Number(value!.replace(/VND\s?|(\.*)/g, ""))}
						/>
					</Form.Item>
				) : (
					<Form.Item
						name="percentage"
						label="Phần trăm giảm giá"
						{...defaultFormConfig}
					>
						<InputNumber
							step={1}
							formatter={(value) => `${value}%`}
							parser={(value) => Number(value!.replace("%", ""))}
						/>
					</Form.Item>
				)}
			</Col>
		</Row>
	);
}
