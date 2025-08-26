import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          green: "#25D366",
          "green-dark": "#20B95B",
          "green-light": "#DCF8C6",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "16": "16px",
      },
      boxShadow: {
        "subtle": "0 2px 8px rgba(0, 0, 0, 0.1)",
        "floating": "0 8px 32px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
