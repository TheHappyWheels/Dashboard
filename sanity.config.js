import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['settings', 'heroOptions', 'contactOptions'])

const singelton = (S, name, id) => {
  return (
    // Our singleton type has a list item with a custom child
    S.listItem().title(name).id(id).child(
      // Instead of rendering a list of documents, we render a single
      // document, specifying the `documentId` manually to ensure
      // that we're editing the single instance of the document
      S.document().schemaType(id).documentId(id),
    )
  )
}

export default defineConfig({
  name: 'default',
  title: 'Dashboard',

  projectId: 'kscp8ecy',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('cars').title('Cars'),
            S.documentTypeListItem('features').title('Features'),
            S.documentTypeListItem('driveTrainTypes').title('Drive Train Types'),
            S.documentTypeListItem('transitionTypes').title('Transition Types'),
            singelton(S, 'Settings', 'settings'),
            singelton(S, 'Hero Options', 'heroOptions'),
            singelton(S, 'Contact Options', 'contactOptions'),
            S.documentTypeListItem('footerLinks').title('Footer Links'),
            S.documentTypeListItem('fuelType').title('Fuel Type'),
            S.documentTypeListItem('pages').title('Pages'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
