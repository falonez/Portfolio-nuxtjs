// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@gits-id/ui-nuxt", "@nuxtjs/tailwindcss", "nuxt-icon"],
  plugins: [{ src: "~/plugins/aos.ts", mode: "client" }],
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title: "Nuxt App",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
        },
      ],
    },
  },
});
