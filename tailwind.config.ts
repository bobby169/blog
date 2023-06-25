/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode 默认值为 media，即媒体查询适配
  // 现在被我改为了 class 选择器策略，同时修改了选择器为 .dark-mode (见第二个参数)
  darkMode: ["class", ".dark-mode"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        //  text-brand, bg-brand等
        // brand: withOpacityValue('--color-brand')
        brand: "rgba(var(--color-brand), <alpha-value>)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  // plugins: [require("@tailwindcss/typography")],
};
