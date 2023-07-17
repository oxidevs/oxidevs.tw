import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-TW",
  title: "OXIDEVS",
  description: "Oxidevs Home",
  head: [["link", { rel: "icon", href: "/images/icon.ico" }]],
  theme: defaultTheme({
    navbar: [
      {
        text: "Home",
        link: "/",
      },
    ],
  }),
});
