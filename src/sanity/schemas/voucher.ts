import {defineField, defineType} from "sanity";

export default defineType({
  name: "voucher",
  title: "Voucher",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Tên voucher",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discount",
      title: "Giảm giá",
      type: "object",
      fields: [
        {
          name: "amount",
          title: "Số tiền giảm",
          type: "number",
          validation: (Rule) => Rule.integer().positive(),
          hidden: ({parent, value}) => !value && !!parent?.percent,
        },
        {
          name: "percent",
          title: "Phần trăm chiết khấu",
          type: "number",
          validation: (Rule) => Rule.positive().precision(1).min(0).max(100),
          hidden: ({parent, value}) => !value && !!parent?.amount,
        },
      ],
    }),
    defineField({
      name: "expiredDate",
      title: "Ngày hết hạn",
      type: "datetime",
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
    }),
  ],
});
