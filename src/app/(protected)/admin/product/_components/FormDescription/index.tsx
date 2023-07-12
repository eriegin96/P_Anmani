import {Col, Form, Input, Row} from "antd";

export default function FormDescription() {
	return (
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
			<Col span={8}>
				<Form.Item
					name={["description", "juridice"]}
					label="Pháp lý"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="Sở hữu lâu dài" />
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name={["description", "delivery", "date"]}
					label="Ngày bàn giao"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="Dự kiến 2025" />
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name={["description", "delivery", "info"]}
					label="Bàn giao"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="Bàn giao thô hoàn thiện ngoài" />
				</Form.Item>
			</Col>
		</Row>
	);
}
