// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Star Wars - Todos os dados de Star Wars que você sempre quis',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'ogTitle', content: 'Star Wars - Todos os dados de Star Wars que você sempre quis' },
        { name: 'description', content: 'Procure pelo seu personagem favorito!' },
        { name: 'ogDescription', content: 'Procure pelo seu personagem favorito!' },
        { name: 'ogImage', content: '/img/starwars_logo.png' }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    '~/assets/styles/global.css'
  ],
})
