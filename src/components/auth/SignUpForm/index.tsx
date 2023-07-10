"use client";

import {ROUTE} from "@/constants/route";
import {Button, Form, Input} from "antd";
import Link from "next/link";
import styles from "./sigUpForm.module.scss";

interface SignUpFormData {
	name: string;
	email: string;
	password: string;
}

export default function SignUpForm() {
	const [form] = Form.useForm();
	const isLoading = false;

	const handleSubmit = (values: SignUpFormData) => {
		console.log(values);
	};

	return (
		<div className={styles.formWrapper}>
			<Form layout="vertical" form={form} onFinish={handleSubmit}>
				<Form.Item
					name="name"
					label="Họ và tên"
					rules={[{required: true, message: "Trường này không được để trống"}]}
					className={styles.formItem}
				>
					<Input placeholder="Nguyễn Văn A" />
				</Form.Item>
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
					label="Mật khẩu"
					rules={[{required: true, message: "Trường này không được để trống"}]}
					className={styles.formItem}
				>
					<Input.Password placeholder="Mật khẩu" />
				</Form.Item>
				<Form.Item
					name="confirmPassword"
					label="Nhập lại mật khẩu"
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
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						loading={isLoading}
						className={styles.btn}
					>
						Đăng ký
					</Button>
				</Form.Item>
				<div className={styles.footerWrapper}>
					<span className={styles.text}>
						Đã có tài khoản? Đăng nhập <Link href={ROUTE.SIGN_IN}>ở đây</Link>
					</span>
				</div>
			</Form>
		</div>
	);
}
