// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],
  css: ['~/assets/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'MI CONTABLE PLUS+ | Declaraciones de Impuestos y Contabilidad',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Excelencia contable para decisiones estratégicas. Declaraciones de impuestos, contabilidad, firma electrónica y más. Disponible 24/7.' },
        { name: 'keywords', content: 'contabilidad, impuestos, declaraciones, firma electrónica, contable, asesoría contable, Ecuador' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'MI CONTABLE PLUS+ | Declaraciones de Impuestos y Contabilidad' },
        { property: 'og:description', content: 'Excelencia contable para decisiones estratégicas. Declaraciones de impuestos, contabilidad y más. Disponible 24/7.' },
        { property: 'og:url', content: 'https://micontableplus.magdata.com.ec' },
        { property: 'og:image', content: 'https://micontableplus.magdata.com.ec/images/logo.jpeg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MI CONTABLE PLUS+' },
        { name: 'twitter:description', content: 'Excelencia contable para decisiones estratégicas.' },
        { name: 'theme-color', content: '#1e3166' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpeg' },
        { rel: 'canonical', href: 'https://micontableplus.magdata.com.ec' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'MI CONTABLE PLUS+',
            description: 'Declaraciones de impuestos y contabilidad. Excelencia contable para decisiones estratégicas.',
            telephone: '0998525994',
            email: 'micontableplus162026@outlook.com',
            openingHours: 'Mo-Su 00:00-24:00',
            url: 'https://micontableplus.magdata.com.ec',
            areaServed: 'EC',
            serviceType: ['Contabilidad', 'Declaración de Impuestos', 'Firma Electrónica', 'Asesoría Contable'],
          })
        }
      ]
    }
  },

  ui: {
    colorMode: false,
  }
})