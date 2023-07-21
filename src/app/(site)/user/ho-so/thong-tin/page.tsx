"use client";

import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";
import {IconCalendar, IconMail, IconPhone, IconUser} from "@tabler/icons-react";
import {DATE_FORMAT, PLACEHOLDER_EMAIL} from "@/constants/common";
import {TUserInfoFormData} from "@/types/api.type";
import {defaultFormConfig} from "@/app/(protected)/admin/_shared/config";
import {useEffect} from "react";
import {useAuthContext} from "@/providers/AuthProvider";

export default function Page() {
	const [form] = Form.useForm<TUserInfoFormData>();
	const {userInfo} = useAuthContext();

	const handleSubmit = (values: TUserInfoFormData) => {
		console.log(values);
	};

	useEffect(() => {
		form.setFieldsValue({...userInfo});
	}, [userInfo, form]);

	return (
		<Form
			layout="vertical"
			requiredMark="optional"
			form={form}
			onFinish={handleSubmit}
		>
			<Row gutter={[16, 10]}>
				<Col span={24}>
					<Form.Item
						name="name"
						label="Họ và tên"
						style={{marginBottom: "0"}}
						{...defaultFormConfig}
					>
						<Input prefix={<IconUser size={20} />} placeholder="Nguyễn Văn A" />
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item
						name="phoneNumber"
						label="Số điện thoại"
						style={{marginBottom: "0"}}
						{...defaultFormConfig}
					>
						<Input
							prefix={<IconPhone size={20} />}
							placeholder="0123 456 789"
						/>
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item
						name="email"
						label="Email"
						style={{marginBottom: "0"}}
						{...defaultFormConfig}
					>
						<Input
							prefix={<IconMail size={20} />}
							placeholder={PLACEHOLDER_EMAIL}
						/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name="dob"
						label="Ngày sinh"
						style={{marginBottom: "0"}}
						{...defaultFormConfig}
					>
						<DatePicker
							placeholder={DATE_FORMAT}
							suffixIcon={<IconCalendar size={20} />}
							format={DATE_FORMAT}
							style={{width: "100%"}}
						/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name="gender"
						label="Giới tính"
						style={{marginBottom: "0"}}
						{...defaultFormConfig}
					>
						<Select
							options={[
								{value: "male", label: "Nam"},
								{value: "female", label: "Nữ"},
							]}
						/>
					</Form.Item>
				</Col>

				<Col span={24}>
					<Button
						type="primary"
						htmlType="submit"
						// loading={isEditing ? isUpdating : isCreating}
					>
						Cập nhật
					</Button>
				</Col>
			</Row>
		</Form>
	);
}
