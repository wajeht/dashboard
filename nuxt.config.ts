// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-vitest"
  ]
})