import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8ecae6",
          secondary: "#219ebc",
          accent: "#fb8500",
          neutral: "#011e2d",
          "base-100": "#f7fbfd",
          info: "#90e0ef",
          success: "#00ab4d",
          warning: "#ffb703",
          error: "#c51a37",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
