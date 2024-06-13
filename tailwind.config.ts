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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#96be25",
        secondary: "#536914",
        codeBackground: "#0f1304",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        grow: "grow 0.3s ease-in-out forwards",
      },
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
  },
  screens: {
    sm: { min: "640px", max: "767px" },
    md: { min: "768px", max: "1023px" },
    lg: { min: "1024px" },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
export default config;
