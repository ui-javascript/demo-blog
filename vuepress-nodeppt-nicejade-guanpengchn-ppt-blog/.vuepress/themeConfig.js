const helper = require('./utils')

module.exports = {
  repo: 'luo0412',
  editLinks: false,
  docsDir: '.vuepress/dist',

  // TODO 搜索APIkey
  algolia: {
    apiKey: '6290673b2059b2332d64c13d248877ad',
    indexName: 'lovejade',
    inputSelector: '',
    debug: false
  },
  comment: {
    clientID: '047582532241759ff101',
    clientSecret: 'fd8193330fb5748ccaec4d97b7495d7d7e175021',
    repo: 'vuepress-web-app',
    owner: 'nicejade',
    admin: ['nicejade'],
    perPage: 5,
    distractionFreeMode: false  // Facebook-like distraction free mode
  },
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '博客',
          link: '/ch1-blog/',
        },
        {
          text: '文章',
          link: '/ch2-article/'
        },
        // {
        //   text: '应用',
        //   link: '/ch3-application/'
        // },
        // {
        //   text: '招聘',
        //   link: '/04_recruit/'
        // }
      ],
      sidebar: {
        '/ch1-blog/': helper.utils.genSidebarConfig('轩帅の博客', './ch1-blog/', false),
        '/ch2-article/': helper.utils.genSidebarConfig('最新文章', './ch2-article/', false)
      }
    },

    '/_en/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'Application',
          link: '/_en/ch3-application/'
        }
      ]
    }

  }
}
