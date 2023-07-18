"use client";

import {ROUTE} from "@/constants/route";
import {Button, Form, Input} from "antd";
import Link from "next/link";
import styles from "../auth.module.scss";
import {PLACEHOLDER_EMAIL} from "@/constants/common";
import {TSignUpFormData} from "@/types/api.type";
import {useSignUp} from "@/hooks/api/mutation/useSignUp";

export default function SignUpForm() {
	const [form] = Form.useForm();
	const {trigger, isMutating} = useSignUp();

	const handleSubmit = (values: TSignUpFormData) => {
		console.log(values);
		trigger(values);
	};

	return (
		<Form layout="vertical" form={form} onFinish={handleSubmit}>
			<h3 className={styles.formTitle}>Đăng ký</h3>
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
				<Input placeholder={PLACEHOLDER_EMAIL} />
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
					loading={isMutating}
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
	);
}
