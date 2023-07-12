import {Button, Col, Form, Input, Row} from "antd";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import styles from "../ProductForm/productForm.module.scss";

export default function FormLocation() {
	return (
		<Row gutter={20}>
			<Col span={24}>
				<Form.Item
					name={["location", "detail"]}
					label="Vị trí"
					rules={[{required: true, message: "Trường này không được để trống"}]}
				>
					<Input placeholder="Số nhà, đường, phường" />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.List
					name={["location", "nearby"]}
					rules={[
						{
							validator: async (_, names) => {
								if (!names || names.length < 1) {
									return Promise.reject(
										new Error("Ít nhất 1 địa điểm lân cận")
									);
								}
							},
						},
					]}
				>
					{(fields, {add, remove}, {errors}) => (
						<Form.Item label="Địa điểm lân cận">
							{fields.map(({key, name, ...restField}) => (
								<Form.Item
									required={false}
									key={key}
									className={styles.formListItem}
								>
									<Form.Item
										{...restField}
										name={[name, "name"]}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập tên địa điểm",
											},
										]}
										noStyle
									>
										<Input placeholder="Tên địa điểm" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, "distance"]}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập khoảng cách",
											},
										]}
										noStyle
									>
										<Input placeholder="Khoảng cách" />
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
								className={styles.addLocationBtn}
							>
								Thêm địa điểm lân cận
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					)}
				</Form.List>
			</Col>
			<Col span={12}>
				<Form.List
					name={["location", "popular"]}
					rules={[
						{
							validator: async (_, names) => {
								if (!names || names.length < 1) {
									return Promise.reject(
										new Error("Ít nhất 1 địa điểm phổ biến")
									);
								}
							},
						},
					]}
				>
					{(fields, {add, remove}, {errors}) => (
						<Form.Item label="Địa điểm phổ biến">
							{fields.map(({key, name, ...restField}) => (
								<Form.Item
									required={false}
									key={key}
									className={styles.formListItem}
								>
									<Form.Item
										{...restField}
										name={[name, "name"]}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập tên địa điểm",
											},
										]}
										noStyle
									>
										<Input placeholder="Tên địa điểm" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, "distance"]}
										validateTrigger={["onChange", "onBlur"]}
										rules={[
											{
												required: true,
												whitespace: true,
												message: "Vui lòng nhập khoảng cách",
											},
										]}
										noStyle
									>
										<Input placeholder="Khoảng cách" />
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
								className={styles.addLocationBtn}
							>
								Thêm địa điểm phổ biến
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					)}
				</Form.List>
			</Col>
		</Row>
	);
}
