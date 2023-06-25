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
        cyan: "#9cdbff",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
      height: {
        "84": "22rem",
      },
      width: {
        "3/2": "150%",
        "4/2": "200%",
        "1/2-screen": "50vw",
      },
      margin: {
        "-fullh": "-100vh",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxlmin: "1351px",
      xxlmax: { max: "1350px" },
    },
    fontFamily: {
      display: ["Quicksand", "sans-serif"],
      body: ["Quicksand", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    inset: {
      "0": 0,
      "16": "16px",
      "32": "32px",
      "64": "64px",
      "2rem": "2rem",
      "3rem": "3rem",
    },
  },
  corePlugins: {
    preflight: true,
  },
  // plugins: [require("@tailwindcss/typography")],
};
