import {Button, Form, Input} from "antd";
import styles from "@/app/(protected)/admin/_shared/form.module.scss";
import {PLACEHOLDER_LINK} from "@/constants/common";
import {IconMinus, IconPlus} from "@tabler/icons-react";

type ImageFormFieldProps = {
	formName: string[];
	label: string;
	addBtnText: string;
};

export default function ImageFormField({
	formName,
	label,
	addBtnText,
}: ImageFormFieldProps) {
	return (
		<Form.List
			name={formName}
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
				<Form.Item label={label} required>
					{fields.map(({key, name}) => (
						<Form.Item key={key} className={styles.formListItem}>
							<Form.Item
								name={name}
								validateTrigger={["onChange", "onBlur"]}
								rules={[
									{
										required: true,
										whitespace: true,
										message: "Vui lòng nhập link hình ảnh",
									},
									{
										type: "url",
										message: "Trường này phải có định dạng https://...",
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
						{addBtnText}
					</Button>
					<Form.ErrorList errors={errors} />
				</Form.Item>
			)}
		</Form.List>
	);
}
