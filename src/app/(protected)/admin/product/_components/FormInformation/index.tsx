import {Col, Form, Input, Row} from "antd";
import {defaultFormConfig} from "@/app/(protected)/admin/_shared/config";

export default function FormInformation() {
	return (
		<Row gutter={10}>
			<Col span={4}>
				<Form.Item
					name={["information", "landArea"]}
					label="Diện tích đất"
					{...defaultFormConfig}
				>
					<Input placeholder="165m2" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "floorArea"]}
					label="Diện tích sàn"
					{...defaultFormConfig}
				>
					<Input placeholder="165m2" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "floor"]}
					label="Số tầng"
					{...defaultFormConfig}
				>
					<Input placeholder="5 tầng" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "bedroom"]}
					label="Số phòng ngủ"
					{...defaultFormConfig}
				>
					<Input placeholder="4 phòng ngủ - 2 hồ bơi" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "bathroom"]}
					label="Số phòng tắm"
					{...defaultFormConfig}
				>
					<Input placeholder="3 phòng tắm" />
				</Form.Item>
			</Col>
			<Col span={4}>
				<Form.Item
					name={["information", "other"]}
					label="Thông số khác"
					{...defaultFormConfig}
				>
					<Input placeholder="Đơn giá" />
				</Form.Item>
			</Col>
		</Row>
	);
}
