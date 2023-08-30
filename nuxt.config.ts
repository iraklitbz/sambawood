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
      provider: 'cloudinary',
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/dmb4l3zfo/image/upload/v1686914083/sambawood/',
        modifiers: {
          format: 'webp',
          effect: 'sharpen:100',
          quality: 'auto:best',
        }
      }
    },
    css: ["plyr/dist/plyr.css"],
    i18n: {
      locales: [
        {
          code: 'es',
          name: 'español',
          label: 'ES'
        },
        {
          code: 'en',
          name: 'English',
          label: 'EN'
        },
        {
          code: 'de',
          name: 'Deutsch',
          label: 'DE'
        }
      ],
      defaultLocale: 'en',
      vueI18n: './i18n.config.ts'
    }
})
