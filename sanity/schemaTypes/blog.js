import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: defineField({
        source: 'title',
      }),
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
    }),
    defineField({
      name: 'desc',
      type: 'text',
      title: 'Small description of blog article',
    }),
    defineField({
      name: 'isMostPopular',
      type: 'boolean',
      title: 'Is blog most popular',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'}, // Podržava regularne blokove teksta
        {
          type: 'object', // Definiše prilagođeni tip za code block
          name: 'code',
          title: 'Code block',
          fields: [
            {
              name: 'language',
              type: 'string',
              title: 'Language',
              options: {
                list: [
                  {title: 'JavaScript', value: 'javascript'},
                  {title: 'Python', value: 'python'},
                  {title: 'HTML', value: 'html'},
                  {title: 'CSS', value: 'css'},
                  {title: 'Bash', value: 'bash'},
                  {title: 'JSON', value: 'json'},
                  {title: 'Java', value: 'java'},
                  {title: 'C++', value: 'cpp'},
                  // Dodaj dodatne jezike prema potrebi
                ],
              },
            },
            {
              name: 'code',
              type: 'text',
              title: 'Code',
            },
          ],
        },
      ],
    }),

    // Polje za recenziju (ocjene od 1 do 5)
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rate this blog post from 1 to 5 stars',
      validation: (rule) => rule.min(1).max(5).required(), // Validacija za ograničenje između 1 i 5
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      // validation: (rule) => rule.required(),  // Dodaj validaciju ako želiš da je autor obavezan
    }),
  ],
})
