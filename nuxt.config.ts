import { defineNuxtConfig } from "nuxt/config"
export default defineNuxtConfig({
    modules: [
        'nuxt-icons',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontaine',
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        '@nuxt/image',
        ['@nuxtjs/google-fonts', {
            families: {
              'Roboto Mono': [100, 300, 700],
              'Noto Sans Georgian': true,
              'Poppins': [100, 500],
              download: true,
              inject: true
            }
          }]
    ],
    image: {
      dir: 'assets/images'
    },
    css: ["plyr/dist/plyr.css"],
    i18n: {
      vueI18n: './i18n.config.ts'
    }
})
