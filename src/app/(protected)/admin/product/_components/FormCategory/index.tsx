import {
	investorOptions,
	locationOptions,
	tagOptions,
	typeOptions,
} from "@/constants/selectOptions";
import {Col, Form, Row, Select} from "antd";
import {defaultFormConfig} from "@/app/(protected)/admin/_shared/config";

export default function FormCategory() {
	const onSelectChange = (value: string) => {
		console.log(`status ${value}`);
	};

	return (
		<Row gutter={20}>
			<Col span={6}>
				<Form.Item
					name="tag"
					label="Hình thức bán/cho thuê"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn hình thức bán/cho thuê"
						onChange={onSelectChange}
						allowClear
						options={tagOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={6}>
				<Form.Item name="type" label="Loại hình" {...defaultFormConfig}>
					<Select
						placeholder="Vui lòng chọn loại hình"
						onChange={onSelectChange}
						allowClear
						options={typeOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={6}>
				<Form.Item
					name={["investor", "name"]}
					label="Chủ đầu tư"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn chủ đầu tư"
						onChange={onSelectChange}
						allowClear
						options={investorOptions}
					/>
				</Form.Item>
			</Col>
			<Col span={6}>
				<Form.Item
					name={["location", "main"]}
					label="Khu vực"
					{...defaultFormConfig}
				>
					<Select
						placeholder="Vui lòng chọn khu vực"
						onChange={onSelectChange}
						allowClear
						options={locationOptions}
					/>
				</Form.Item>
			</Col>
		</Row>
	);
}
