module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/mint-ui/lib/style.css'},
    ]
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [{ src: '~plugins/mint'}],
 // plugins: [{ src: '~plugins/mint', ssr: false }],
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
        })
      }
    }
  }
}
