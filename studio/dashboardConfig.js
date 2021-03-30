export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60627628f4f7000083f7d80b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cs89mnbt',
                  apiId: 'ad7141b7-736f-4be3-b2e9-fa0bc839aceb'
                },
                {
                  buildHookId: '60627628e3789600d21e2646',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i9t1ajsr',
                  apiId: 'd4a694f6-15c7-4f6a-9a65-55baecc267f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/techstack-io/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i9t1ajsr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
