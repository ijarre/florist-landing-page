/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ClashDisplay-Variable", ...defaultTheme.fontFamily.sans],
        paragraph: ["CabinetGrotesk-Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "main-pink": "#DF8DC8",
        "main-green": "#357269",
        "main-white": "#F5F5F5",
        "main-black": "#2c2c2c",
      },
      backgroundImage: {
        bespoke: "url(./src/assets/background-bespoke.png)",
      },
      boxShadow: {
        "overlay-image": "inset 0 0 0 1000px rgba(0,0,0,.6)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
