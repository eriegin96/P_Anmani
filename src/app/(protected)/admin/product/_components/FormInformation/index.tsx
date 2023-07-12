import {Col, Form, Input, Row} from "antd";

export default function FormInformation() {
	return (
		<Row gutter={10}>
			<Col span={4}>
				<Form.Item
					name={["information", "landArea"]}
					label="Diện tích đất"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="165m2" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "floorArea"]}
					label="Diện tích sàn"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="165m2" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "floor"]}
					label="Số tầng"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="5 tầng" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "bedroom"]}
					label="Số phòng ngủ"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="4 phòng ngủ - 2 hồ bơi" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "bathroom"]}
					label="Số phòng tắm"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="3 phòng tắm" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "other"]}
					label="Tiện ích khác"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="Đơn giá" />
				</Form.Item>
			</Col>
		</Row>
	);
}
