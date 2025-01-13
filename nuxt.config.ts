export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server',
    runtimeConfig: {
      port: process.env.PORT || 3000,
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/global.css',
    '@/assets/styles/variables.css'
  ],
  plugins: ['~/plugins/pinia.js'],
  serverHandlers: [{ route: '/api', handler: '~/server.js' }],
  runtimeConfig: {
    public: {
      apiBase: 'https://cambusa-dev-700afd82d2d2.herokuapp.com/',
    }
  },
});