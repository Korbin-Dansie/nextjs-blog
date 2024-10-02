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
          primary: "#FFF9D0",
          secondary: "#CAF4FF",
          accent: "#A0DEFF",
          neutral: "#04232d",
          "base-100": "#fcfcfc",
          info: "#5AB2FF",
          success: "#00df77",
          warning: "#e87700",
          error: "#bc0946",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
