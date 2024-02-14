export default {
  name: 'contactOptions',
  type: 'document',
  title: 'Contact Options',
  fields: [
    {name: 'facebookLink', type: 'url', title: 'Facebook Link'},
    {name: 'showFacebookLink', type: 'boolean', title: 'Show Facebook Link'},
    {name: 'instagramLink', type: 'url', title: 'Instagram Link'},
    {name: 'showInstagramLink', type: 'boolean', title: 'Show Instagram Link'},
    {name: 'twitterLink', type: 'url', title: 'Twitter Link'},
    {name: 'showTwitterLink', type: 'boolean', title: 'Show Twitter Link'},
    {name: 'pinterestLink', type: 'url', title: 'Pinterest Link'},
    {name: 'showPinterestLink', type: 'boolean', title: 'Show Pinterest Link'},
    {name: 'phone', type: 'string', title: 'Phone Number'},
    {name: 'showPhoneLink', type: 'boolean', title: 'Show Phone Number'},
    {name: 'email', type: 'string', title: 'Email'},
    {name: 'showEmailLink', type: 'boolean', title: 'Show Email'},
  ],
}
