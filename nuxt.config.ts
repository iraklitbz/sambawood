export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-8KXY4K9G02',
          async: true
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8KXY4K9G02');`
        }
      ]
    }
  },
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
    tailwindcss: {
      exposeConfig: true,
      cssPath: '~/assets/scss/main.scss'
    },
    css: ["plyr/dist/plyr.css"],
    i18n: {
      strategy: 'prefix_except_default',
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
      vueI18n: './i18n.config.ts',
      defaultLocale: 'en'
    },
    nitro: {
      compressPublicAssets: true
    }
})
