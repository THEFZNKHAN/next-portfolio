import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient_radial: "radial-gradient(var(--tw-gradient-stops))",
        gradient_conic:
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light_gray: "#1c1b23",
        bg_black: "#111113",
        text_gray: "#e5e5e5",
      },
    },
  },
  plugins: [],
};

export default config;
