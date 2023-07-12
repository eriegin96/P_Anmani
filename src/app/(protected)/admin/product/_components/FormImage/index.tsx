import {Button, Col, Form, Input, Row} from "antd";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import styles from "../ProductForm/productForm.module.scss";

export default function FormImage() {
	return (
		<Row gutter={20}>
			<Col span={24}>
				<Form.Item
					name={["image", "thumbnail"]}
					label="Hình ảnh chính"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="https://img.photo.com" />
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
								<div key={key} className={styles.formListItemDiv}>
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
									>
										<Input placeholder="https://img.photo.com" />
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
								className={styles.addLocationBtn}
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
								<div key={key} className={styles.formListItemDiv}>
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
									>
										<Input placeholder="https://img.photo.com" />
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
								className={styles.addLocationBtn}
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
								<div key={key} className={styles.formListItemDiv}>
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
									>
										<Input placeholder="https://img.photo.com" />
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
								className={styles.addLocationBtn}
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
