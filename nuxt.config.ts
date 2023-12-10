export default defineNuxtConfig({
  srcDir: './src',
  devtools: { enabled: false },
  imports: {
    autoImport: true
  },
  robots: {
     UserAgent: '*',
     Disallow: '/' ,
  },
  plausible: {
    apiHost: 'https://plausible.jaw.dev/',
 },
  modules: [
   "@nuxt/ui",
   "@nuxtjs/tailwindcss",
   "@formkit/auto-animate",
   "@vueuse/nuxt",
   "@nuxt/image",
   "@nuxtjs/color-mode",
   "nuxt-vitest",
   "@nuxtjs/robots",
   "@nuxtjs/plausible",
   "nuxt-auth-utils"
  ]
})
