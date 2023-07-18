"use client";

import {ROUTE} from "@/constants/route";
import {Button, Form, Input} from "antd";
import Link from "next/link";
import styles from "../auth.module.scss";
import {PLACEHOLDER_EMAIL} from "@/constants/common";
import {useSignIn} from "@/hooks/api/mutation/useSignIn";
import {TSignInFormData} from "@/types/api.type";

export default function SignInForm() {
	const [form] = Form.useForm();
	const {trigger, isMutating} = useSignIn();

	const handleSubmit = (values: TSignInFormData) => {
		console.log(values);

		trigger({username: "kminchelle", password: "0lelplR"});
	};

	return (
		<Form
			layout="vertical"
			requiredMark="optional"
			form={form}
			onFinish={handleSubmit}
		>
			<h3 className={styles.formTitle}>Đăng nhập</h3>
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
			<div className={styles.actionsWrapper}>
				<Link href={ROUTE.CHANGE_PASSWORD}>
					<span>Quên mật khẩu</span>
				</Link>
			</div>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					loading={isMutating}
					className={styles.btn}
				>
					Đăng nhập
				</Button>
			</Form.Item>
			<div className={styles.footerWrapper}>
				<span className={styles.text}>
					Chưa có tài khoản? Đăng ký <Link href={ROUTE.SIGN_UP}>ở đây</Link>
				</span>
			</div>
		</Form>
	);
}
