export default {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    {name: 'name', type: 'string', title: 'Website Name'},
    {name: 'description', type: 'string', title: 'Website Description'},
    {name: 'keywords', type: 'string', title: 'Website Keywords'},
    {name: 'logo', type: 'image', title: 'Logo'},
    {name: 'baseColor', type: 'string', title: 'Theme Color'},
  ],
}
