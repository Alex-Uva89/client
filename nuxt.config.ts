export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'heroku',
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
      apiBase: 'https://cambusa-dev-700afd82d2d2.herokuapp.com/',
    }
  },
});
