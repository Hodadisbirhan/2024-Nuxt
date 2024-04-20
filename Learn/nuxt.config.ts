// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  ssr: false,
  colorMode: { classSuffix: "" },
  css: ["~/assets/css/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/color-mode"],
});
