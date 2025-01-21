export default defineNuxtConfig({
  ssr: true,
  head: {
    link: [
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  nitro: {
    preset: 'heroku',
    routeRules: {
      '/**': { cors: true }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/global.css',
    '@/assets/styles/variables.css'
  ],
  plugins: ['~/plugins/pinia.js'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://cambusa-dev-700afd82d2d2.herokuapp.com/',
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      onBeforeEnter: (el) => {
        window.scrollTo(0, 0)
      }
    }
  },
});
