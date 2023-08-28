import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Game name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of Game',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'genre',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [{type: "reference",to: [{type: "category"}]}]
    }),
  ],
})
