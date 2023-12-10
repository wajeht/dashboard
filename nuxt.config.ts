export default defineNuxtConfig({
  srcDir: './src',
  devtools: { enabled: true },
  robots: {
     UserAgent: '*',
     Disallow: '/' ,
  },
  plausible: {
    apiHost: 'https://plausible.jaw.dev/',
 },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-vitest",
    "@nuxtjs/robots",
    "@nuxtjs/plausible"
  ]
})
