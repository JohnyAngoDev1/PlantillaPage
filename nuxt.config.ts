// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],
  css: ['~/assets/main.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpeg' }
      ]
    }
  },

  ui: {
    colorMode: false,
  }
})