import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'property',
	title: 'Bất động sản',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Tên bất động sản',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Đường dẫn',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'category',
			title: 'Phân loại',
			type: 'reference',
			to: { type: 'category' },
		}),
		defineField({
			name: 'address',
			title: 'Địa chỉ',
			type: 'string',
		}),
		defineField({
			name: 'price',
			title: 'Giá',
			type: 'number',
			validation: (Rule) => Rule.integer().positive(),
		}),
		defineField({
			name: 'mainImage',
			title: 'Hình ảnh chính',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'imageLinks',
			title: 'Link hình ảnh',
			type: 'object',
			fields: [
				{
					name: 'main',
					title: 'Link hình ảnh chính',
					type: 'array',
					of: [{ type: 'url' }],
				},
				{
					name: 'owner',
					title: 'Link hình ảnh của chủ đầu tư',
					type: 'array',
					of: [{ type: 'url' }],
				},
				{
					name: 'reality',
					title: 'Link hình ảnh thực tế',
					type: 'array',
					of: [{ type: 'url' }],
				},
			],
		}),
		defineField({
			name: 'information',
			title: 'Thông số kỹ thuật',
			type: 'object',
			fields: [
				{
					name: 'landArea',
					title: 'Tổng diện tích đất',
					type: 'string',
				},
				{
					name: 'propertyArea',
					title: 'Diện tích sàn',
					type: 'string',
				},
				{
					name: 'floor',
					title: 'Tầng',
					type: 'string',
				},
				{
					name: 'bedroom',
					title: 'Phòng ngủ',
					type: 'string',
				},
				{
					name: 'bathroom',
					title: 'Phòng tắm',
					type: 'string',
				},
				{
					name: 'other',
					title: 'Khác',
					type: 'string',
				},
			],
		}),
		defineField({
			name: 'facility',
			title: 'Tiện ích',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'position',
			title: 'Vị trí',
			type: 'object',
			fields: [
				{
					name: 'nearby',
					title: 'Địa điểm lân cận',
					type: 'array',
					of: [{ type: 'place' }],
				},
				{
					name: 'popular',
					title: 'Phổ biến trong khu vực',
					type: 'array',
					of: [{ type: 'place' }],
				},
			],
		}),
		defineField({
			name: 'policy',
			title: 'Chính sách',
			type: 'object',
			fields: [
				{
					name: 'overall',
					title: 'Chính sách chung',
					type: 'blockContent',
				},
				{
					name: 'loan',
					title: 'Chính sách vay',
					type: 'blockContent',
				},
			],
		}),
		defineField({
			name: 'description',
			title: 'Mô tả',
			type: 'blockContent',
		}),
		defineField({
			name: 'vouchers',
			title: 'Vouchers',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'voucher' } }],
		}),
	],

	preview: {
		select: {
			title: 'title',
			author: 'category.title',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
});
