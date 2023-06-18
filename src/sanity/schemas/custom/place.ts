import {defineField, defineType} from "sanity";

export default defineType({
  name: "place",
  title: "Place",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Địa điểm",
      type: "string",
    }),
    defineField({
      name: "distance",
      title: "Khoảng cách",
      type: "string",
      hidden: ({parent, value}) => !value && !!parent?.time,
    }),
    defineField({
      name: "time",
      title: "Cách bao lâu",
      type: "string",
      hidden: ({parent, value}) => !value && !!parent?.distance,
    }),
  ],
});
