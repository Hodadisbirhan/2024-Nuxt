// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: "",
      },
    },
  },
  build: {
    transpile: ["vee-validate", "firebase"],
  },
  ssr: true,
  colorMode: { classSuffix: "" },
  css: ["~/assets/css/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@vueuse/nuxt", "@nuxtjs/color-mode"],
});
