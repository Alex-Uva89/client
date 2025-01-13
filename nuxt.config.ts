export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server',
    devServer: false,
    handlers: [
      {
        route: '/api/**',
        handler: '~/server/express.ts',
      },
    ],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/global.css',
    '@/assets/styles/variables.css'
  ],
  plugins: ['~/plugins/pinia.js'],
});