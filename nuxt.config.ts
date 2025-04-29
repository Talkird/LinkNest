export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "@pinia/nuxt",
  ],
  //"nuxt-vuefire",
  css: ["~/assets/css/main.css"],
});
