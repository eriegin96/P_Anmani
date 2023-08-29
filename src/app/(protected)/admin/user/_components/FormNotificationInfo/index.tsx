import {Col, Form, Input, Row, Radio, Select, DatePicker} from "antd";
import {defaultFormConfig, urlFormValidation} from "../../../_shared/config";
import {
	NOTIFICATION_TARGET_TYPE,
	NOTIFICATION_TYPE,
} from "@/constants/notification";
import {DATE_FORMAT, PLACEHOLDER_LINK} from "@/constants/common";
import {useGetProducts} from "@/hooks/api/product";

export default function FormNotificationInfo() {
	const formInstance = Form.useFormInstance();
	const targetType = Form.useWatch("targetType", formInstance);
	const {data: productList} = useGetProducts();

	return (
		<Row gutter={20}>
			<Col span={12}>
				<Form.Item name="avatar" label="Ảnh avatar" {...urlFormValidation}>
					<Input placeholder={PLACEHOLDER_LINK} />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item
					name="title"
					label="Tiêu đề thông báo"
					{...defaultFormConfig}
				>
					<Input placeholder="Cập nhật thông tin từ chủ đầu tư" />
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item name="type" label="Loại thông báo" {...defaultFormConfig}>
					<Radio.Group>
						<Radio value={NOTIFICATION_TYPE.UPDATE}>Tiến độ thanh toán</Radio>
						<Radio value={NOTIFICATION_TYPE.INFO}>
							Khuyến mãi từ nhà đầu tư
						</Radio>
					</Radio.Group>
				</Form.Item>
			</Col>
			<Col span={8}>
				<Form.Item
					name="targetType"
					label="Đối tượng nhận thông báo"
					{...defaultFormConfig}
				>
					<Radio.Group>
						<Radio value={NOTIFICATION_TARGET_TYPE.ALL}>Tất cả</Radio>
						<Radio value={NOTIFICATION_TARGET_TYPE.INDIVIDUAL}>
							Lựa chọn sản phẩm
						</Radio>
					</Radio.Group>
				</Form.Item>
				{targetType === NOTIFICATION_TARGET_TYPE.INDIVIDUAL && (
					<Form.Item
						name="productIds"
						label="Tên sản phẩm"
						{...defaultFormConfig}
					>
						<Select
							mode="multiple"
							placeholder="Vui lòng chọn sản phẩm nhận thông báo"
							allowClear
							options={productList?.map(({key, name}) => ({
								label: name,
								value: key,
							}))}
						/>
					</Form.Item>
				)}
			</Col>
			<Col span={8}>
				<Form.Item
					name="expire"
					label="Ngày hết hạn"
					rules={[
						{
							type: "object" as const,
							required: true,
							message: "Trường này không được để trống",
						},
					]}
				>
					<DatePicker placement="bottomLeft" format={DATE_FORMAT} />
				</Form.Item>
			</Col>
			<Col span={24}>
				<Form.Item
					name="content"
					label="Nội dung thông báo"
					{...defaultFormConfig}
				>
					<Input.TextArea autoSize={{minRows: 3}} />
				</Form.Item>
			</Col>
		</Row>
	);
}
