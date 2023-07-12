import {Col, Form, Input, Row} from "antd";

export default function FormPolicy() {
	return (
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
	);
}
