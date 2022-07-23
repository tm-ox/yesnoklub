import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devServerHandlers: [],
  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@nuxt/image-edge"],
  colorMode: {
    classSuffix: "",
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/tailwind.css"],
});
