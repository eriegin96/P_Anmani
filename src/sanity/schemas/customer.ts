import {defineField, defineType} from "sanity";

export default defineType({
	name: "customer",
	title: "Khách hàng",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Tên khách hàng",
			type: "string",
		}),
		defineField({
			name: "phoneNumber",
			title: "Số điện thoại",
			type: "string",
		}),
		defineField({
			name: "cart",
			title: "Giỏ hàng",
			type: "array",
			readOnly: true,
			of: [
				{
					type: "object",
					fields: [
						{name: "name", title: "Tên bất động sản", type: "string"},
						{name: "originalPrice", title: "Giá gốc", type: "string"},
						{
							name: "discountedPrice",
							title: "Giá sau khi giảm",
							type: "string",
						},
					],
				},
			],
		}),
	],
});
