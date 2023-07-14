import {Col, Form, Input, Row, Button, Radio} from "antd";
import {defaultFormConfig} from "../../../_shared/config";
import {PLACEHOLDER_LINK} from "@/constants/common";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {EXPLORE_TYPE} from "@/constants/explore";

export default function FormExploreInfo() {
	const onSelectChange = (value: string[]) => {
		console.log(`status ${value}`);
	};

	return (
		<Row gutter={20}>
			<Col span={12}>
				<Form.Item name="title" label="Tiêu đề khám phá" {...defaultFormConfig}>
					<Input placeholder="Cập nhật thông tin từ chủ đầu tư" />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item name="url" label="Link thumbnail" {...defaultFormConfig}>
					<Input placeholder={PLACEHOLDER_LINK} />
				</Form.Item>
			</Col>
			<Col span={24}>
				<Form.List
					name="stories"
					rules={[
						{
							validator: async (_, names) => {
								if (!names || names.length < 1) {
									return Promise.reject(new Error("Ít nhất 1 link"));
								}
							},
						},
					]}
				>
					{(fields, {add, remove}, {errors}) => (
						<Form.Item label="Danh sách link story" required>
							{fields.map(({key, name, ...restField}) => (
								<div key={key} className={styles.formListItemDiv}>
									<Form.Item
										{...restField}
										name={[name, "title"]}
										label="Tiêu đề story"
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập tiêu đề story",
											},
										]}
									>
										<Input placeholder="Tiêu đề" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, "url"]}
										label="Link"
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập link story",
											},
										]}
									>
										<Input placeholder={PLACEHOLDER_LINK} />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, "type"]}
										label="Loại"
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập khoảng cách",
											},
										]}
									>
										<Radio.Group>
											<Radio value={EXPLORE_TYPE.VIDEO}>Video</Radio>
											<Radio value={EXPLORE_TYPE.IMAGE}>Hình ảnh</Radio>
										</Radio.Group>
									</Form.Item>
									<Button shape="circle" danger onClick={() => remove(name)}>
										<IconMinus />
									</Button>
								</div>
							))}

							<Button
								type="dashed"
								onClick={() => add()}
								icon={<IconPlus />}
								className={styles.addListItemBtn}
							>
								Thêm link story
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					)}
				</Form.List>
			</Col>
		</Row>
	);
}
