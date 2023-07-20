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
import {productList} from "@/mock/data";
import {defaultFormConfig} from "../../../_shared/config";
import {DATE_FORMAT, NUMBER_FORMAT} from "@/constants/common";

export default function FormVoucherInfo() {
	const form = Form.useFormInstance();
	const discountOption = Form.useWatch("discountOption", form);
	const productOptions = productList.map((product) => ({
		value: product.id,
		label: product.name,
	}));

	const onSelectChange = (value: string) => {
		console.log(`status ${value}`);
	};

	return (
		<Row gutter={20}>
			<Col span={12}>
				<Form.Item
					name="productId"
					label="Voucher này thuộc về sản phẩm"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn sản phẩm"
						onChange={onSelectChange}
						allowClear
						options={productOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item
					name="expiredDate"
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
				<Form.Item
					name="discountOption"
					label="Giảm giá"
					{...defaultFormConfig}
				>
					<Radio.Group>
						<Radio value="amount">Số tiền</Radio>
						<Radio value="percent">Phần trăm</Radio>
					</Radio.Group>
				</Form.Item>
			</Col>
			<Col span={12}>
				{discountOption === "amount" ? (
					<Form.Item
						name={["discount", "amount"]}
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
						name={["discount", "percent"]}
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
