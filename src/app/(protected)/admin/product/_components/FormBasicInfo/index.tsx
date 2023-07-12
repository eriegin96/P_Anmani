import {NUMBER_FORMAT} from "@/constants/common";
import {statusOptions} from "@/constants/selectOptions";
import {Col, Form, Input, InputNumber, Row, Select} from "antd";
import styles from "../ProductForm/productForm.module.scss";

export default function FormBasicInfo() {
	const onStatusChange = (value: string) => {
		console.log(`status ${value}`);
	};

	return (
		<Row gutter={20}>
			<Col span={24}>
				<Form.Item
					name="name"
					label="Tên"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="Căn hộ Nha Trang" />
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name="status"
					label="Trạng thái BĐS"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Select
						placeholder="Vui lòng chọn trạng thái của BĐS"
						onChange={onStatusChange}
						allowClear
						options={statusOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name="price"
					label="Giá gốc"
					rules={[{required: true, message: "Trường này không được để trống"}]}
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
					rules={[{required: true, message: "Trường này không được để trống"}]}
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
	);
}
