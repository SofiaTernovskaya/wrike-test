module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wrike-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        '@/assets/scss/_vars.scss',
        '@/assets/scss/_mixins.scss'
      ]
    ]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '~/assets/scss/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'external-svg-sprite-loader'
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const rule = config.module.rules.find(
        r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/'
      )
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      // Добавляем лоадер для картинок, удалив SVG лоадер
      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      })

      // Добавляем svg лоадер
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      })
    }
  }
}

