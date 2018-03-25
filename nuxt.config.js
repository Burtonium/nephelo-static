module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nephelo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Static webpage for clients' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.resolve.alias['@fortawesome/fontawesome-free-brands'] = '@fortawesome/fontawesome-free-brands/shakable.es.js';
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
  },
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false },
    { src: '~/plugins/globals' }
  ],
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        {
          set: '@fortawesome/fontawesome-free-brands',
          icons: ['faGithub', 'faLinkedin']
        }
      ]
    }]
  ]
}
