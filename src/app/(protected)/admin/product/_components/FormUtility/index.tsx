import {Button, Form, Input} from "antd";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {IconMinus, IconPlus} from "@tabler/icons-react";

type Props = {};

export default function FormUtility({}: Props) {
	return (
		<Form.List
			name={"utility"}
			rules={[
				{
					validator: async (_, names) => {
						if (!names || names.length < 1) {
							return Promise.reject(new Error("Ít nhất 1 tiện ích"));
						}
					},
				},
			]}
		>
			{(fields, {add, remove}, {errors}) => (
				<Form.Item label="Tiện ích" required>
					{fields.map(({key, name}) => (
						<Form.Item key={key} className={styles.formListItem}>
							<Form.Item
								name={name}
								validateTrigger={["onChange", "onBlur"]}
								rules={[
									{
										required: true,
										whitespace: true,
										message: "Vui lòng nhập tiện ích",
									},
								]}
								noStyle
							>
								<Input placeholder="Dịch vụ Quản gia riêng 24/7" />
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
						Thêm tiện ích
					</Button>
					<Form.ErrorList errors={errors} />
				</Form.Item>
			)}
		</Form.List>
	);
}
