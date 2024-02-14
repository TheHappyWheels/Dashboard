export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
