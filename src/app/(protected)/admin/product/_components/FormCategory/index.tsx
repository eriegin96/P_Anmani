import {
	investorOptions,
	locationOptions,
	projectOptions,
	starOptions,
	tagOptions,
	typeOptions,
} from "@/constants/selectOptions";
import {Col, Form, Row, Select} from "antd";
import {defaultFormConfig} from "@/app/(protected)/admin/_shared/config";

export default function FormCategory() {
	return (
		<Row gutter={20}>
			<Col span={8}>
				<Form.Item
					name="tag"
					label="Hình thức bán/cho thuê"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn hình thức bán/cho thuê"
						allowClear
						options={tagOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item name="type" label="Loại hình" {...defaultFormConfig}>
					<Select
						placeholder="Vui lòng chọn loại hình"
						allowClear
						options={typeOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name={["investor", "name"]}
					label="Chủ đầu tư"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn chủ đầu tư"
						allowClear
						options={investorOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item name={["projectName"]} label="Dự án" {...defaultFormConfig}>
					<Select
						placeholder="Vui lòng chọn dự án"
						allowClear
						options={projectOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name={["location", "main"]}
					label="Khu vực"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn khu vực"
						allowClear
						options={locationOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item name={"star"} label="Sao" {...defaultFormConfig}>
					<Select
						placeholder="Vui lòng chọn khu vực"
						allowClear
						options={starOptions}
					/>
				</Form.Item>
			</Col>
		</Row>
	);
}
