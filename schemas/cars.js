export default {
  name: 'cars',
  type: 'document',
  title: 'Cars',
  // brand, model, year, availablity, slug, color, features, mainImage, images, mileage, fuelType
  fields: [
    {name: 'brand', type: 'string', title: "Car's Brand"},
    {name: 'model', type: 'string', title: "Car's Model"},
    {name: 'year', type: 'string', title: "Car's Year"},
    {name: 'availablity', type: 'boolean', title: "Car's Availablity"},
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc) => `${doc.brand}-${doc.model}-${doc.year}`,
      },
    },
    {name: 'color', type: 'string', title: "Car's Color"},
    {
      name: 'features',
      type: 'array',
      of: [{type: 'reference', to: {type: 'features'}}],
      title: 'Features',
    },
    {name: 'mainImage', type: 'image', title: 'Main Image'},
    {name: 'images', type: 'array', of: [{type: 'image'}], title: 'Images'},
    {name: 'mileage', type: 'string', title: 'Mileage'},
    {name: 'fuelType', type: 'reference', to: [{type: 'fuelType'}], title: 'Fuel Type'},
    {
      name: 'transmission',
      type: 'reference',
      to: [{type: 'transitionTypes'}],
      title: 'Transmission Type',
    },
    {name: 'enigne', type: 'string', title: 'Engine'},
    {name: 'mpg', type: 'number', title: 'MPG'},
    {name: 'tankSize', type: 'number', title: 'Tank Size'},
    {name: 'pricePerMonth', type: 'number', title: 'Price Per Month'},
  ],
}
