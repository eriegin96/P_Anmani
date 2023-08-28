import {Col, Form, Input, Row} from "antd";
import {urlFormValidation} from "@/app/(protected)/admin/_shared/config";
import {PLACEHOLDER_LINK} from "@/constants/common";
import ImageFormField from "../ImageFormField";
import {imageFormList} from "./static";

export default function FormImage() {
	return (
		<Row gutter={20}>
			<Col span={24}>
				<Form.Item
					name={["image", "thumbnail"]}
					label="Hình ảnh chính"
					{...urlFormValidation}
				>
					<Input placeholder={PLACEHOLDER_LINK} />
				</Form.Item>
			</Col>

			{imageFormList.map(({formName, label, addBtnText}) => (
				<Col span={12} key={label}>
					<ImageFormField
						formName={formName}
						label={label}
						addBtnText={addBtnText}
					/>
				</Col>
			))}
		</Row>
	);
}
