"use client";

import {ROUTE} from "@/constants/route";
import {Button, Form, Input} from "antd";
import Link from "next/link";
import styles from "../auth.module.scss";
import {useRouter} from "next/navigation";
import {IconChevronLeft} from "@tabler/icons-react";

interface ForgotPasswordFormData {
	email: string;
}

export default function ForgotPasswordForm() {
	const [form] = Form.useForm();
	const router = useRouter();
	const isLoading = false;

	const handleSubmit = (values: ForgotPasswordFormData) => {
		console.log(values);
	};

	return (
		<Form
			layout="vertical"
			requiredMark="optional"
			form={form}
			onFinish={handleSubmit}
		>
			<div onClick={() => router.back()} className={styles.backWrapper}>
				<IconChevronLeft size={20} />
				Quay lại
			</div>
			<h3 className={styles.formTitle}>Đổi mật khẩu</h3>
			<Form.Item
				name="email"
				label="Email"
				rules={[
					{required: true, message: "Trường này không được để trống"},
					{
						type: "email",
						message: "Vui lòng nhập đúng email",
					},
				]}
				className={styles.formItem}
			>
				<Input placeholder="nguyenvana@email.com" />
			</Form.Item>
			<Form.Item
				name="password"
				label="Mật khẩu mới"
				rules={[{required: true, message: "Trường này không được để trống"}]}
				className={styles.formItem}
			>
				<Input.Password placeholder="Mật khẩu" />
			</Form.Item>
			<Form.Item
				name="confirmPassword"
				label="Nhập lại mật khẩu mới"
				dependencies={["password"]}
				rules={[
					{required: true, message: "Trường này không được để trống"},
					({getFieldValue}) => ({
						validator(_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error("Mật khẩu nhập lại không trùng khớp")
							);
						},
					}),
				]}
				className={styles.formItem}
			>
				<Input.Password placeholder="Nhập lại mật khẩu" />
			</Form.Item>
			<Button
				type="primary"
				htmlType="submit"
				loading={isLoading}
				className={styles.btn}
			>
				Đổi mật khẩu
			</Button>
		</Form>
	);
}
