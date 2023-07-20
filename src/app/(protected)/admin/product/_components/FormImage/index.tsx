import {Button, Col, Form, Input, Row} from "antd";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {defaultFormConfig} from "@/app/(protected)/admin/_shared/config";
import {PLACEHOLDER_LINK} from "@/constants/common";

export default function FormImage() {
	return (
		<Row gutter={20}>
			<Col span={24}>
				<Form.Item
					name={["image", "thumbnail"]}
					label="Hình ảnh chính"
					{...defaultFormConfig}
				>
					<Input placeholder={PLACEHOLDER_LINK} />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.List
					name={["image", "main"]}
					rules={[
						{
							validator: async (_, names) => {
								if (!names || names.length < 1) {
									return Promise.reject(new Error("Ít nhất 1 hình ảnh"));
								}
							},
						},
					]}
				>
					{(fields, {add, remove}, {errors}) => (
						<Form.Item label="Hình ảnh của Chủ đầu tư" required>
							{fields.map(({key, name}) => (
								<Form.Item key={key} className={styles.formListItem}>
									<Form.Item
										required={false}
										name={name}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập link hình ảnh",
											},
										]}
										style={{flex: 1}}
									>
										<Input placeholder={PLACEHOLDER_LINK} />
									</Form.Item>
									<Button shape="circle" danger onClick={() => remove(name)}>
										<IconMinus />
									</Button>
								</Form.Item>
							))}

							<Button
								type="dashed"
								onClick={() => add()}
								icon={<IconPlus />}
								className={styles.addListItemBtn}
							>
								Thêm hình ảnh của Chủ đầu tư
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					)}
				</Form.List>
			</Col>
			<Col span={12}>
				<Form.List
					name={["image", "reality"]}
					rules={[
						{
							validator: async (_, names) => {
								if (!names || names.length < 1) {
									return Promise.reject(new Error("Ít nhất 1 hình ảnh"));
								}
							},
						},
					]}
				>
					{(fields, {add, remove}, {errors}) => (
						<Form.Item label="Hình ảnh thực tế">
							{fields.map(({key, name}) => (
								<Form.Item key={key} className={styles.formListItem}>
									<Form.Item
										required={false}
										name={name}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập link hình ảnh",
											},
										]}
										style={{flex: 1}}
									>
										<Input placeholder={PLACEHOLDER_LINK} />
									</Form.Item>
									<Button shape="circle" danger onClick={() => remove(name)}>
										<IconMinus />
									</Button>
								</Form.Item>
							))}

							<Button
								type="dashed"
								onClick={() => add()}
								icon={<IconPlus />}
								className={styles.addListItemBtn}
							>
								Thêm hình ảnh thực tế
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					)}
				</Form.List>
			</Col>
			<Col span={12}>
				<Form.List name={["image", "area"]}>
					{(fields, {add, remove}, {errors}) => (
						<Form.Item label="Hình ảnh mặt bằng và nội thất bàn giao" required>
							{fields.map(({key, name}) => (
								<Form.Item key={key} className={styles.formListItem}>
									<Form.Item
										required={false}
										name={name}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập link hình ảnh",
											},
										]}
										style={{flex: 1}}
									>
										<Input placeholder={PLACEHOLDER_LINK} />
									</Form.Item>
									<Button shape="circle" danger onClick={() => remove(name)}>
										<IconMinus />
									</Button>
								</Form.Item>
							))}

							<Button
								type="dashed"
								onClick={() => add()}
								icon={<IconPlus />}
								className={styles.addListItemBtn}
							>
								Thêm hình ảnh mặt bằng và nội thất bàn giao
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					)}
				</Form.List>
			</Col>
		</Row>
	);
}
