import type { Field } from 'payload'

export const categoriesField: Field = {
  name: 'categories',
  type: 'relationship',
  relationTo: [
    'blog-categories',
    'property-categories',
    'amenities',
    'contract-types',
    'availability',
  ],
  hasMany: true,
  label: {
    singular: 'Category',
    plural: 'Categories',
  },
  admin: {
    position: 'sidebar',
  },
}
