import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Phân loại',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tiêu đề',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Mô tả',
			type: 'text',
		}),
	],
});
