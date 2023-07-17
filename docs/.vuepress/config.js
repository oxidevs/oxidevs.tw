import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-TW",
  title: "Oxidevs",
  description: "Oxidevs Home",
  theme: defaultTheme({
    navbar: [
      {
        text: "Home",
        link: "/",
      },
    ],
  }),
});
