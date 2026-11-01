import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#F3FCEB",
        blush: "#FFF8F6",
        tint: "#E8F3DF",
        sage: "#E3EEDA",
        line: "#C4C8BC",
        ink: "#161E13",
        body: "#44483F",
        forest: "#2C421F",
        moss: {
          DEFAULT: "#6A8257",
          dark: "#4C6340",
        },
        gold: {
          DEFAULT: "#C9A62D",
          dark: "#B3921F",
        },
        rose: {
          DEFAULT: "#7A3535",
          soft: "#F6DADA",
        },
        honey: "#F6DE8B",
        leaf: "#CFE8B8",
        brand: "#BE832F",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        times: ['"Liberation Serif"', '"Times New Roman"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(22,30,19,0.08), 0 4px 6px -1px rgba(22,30,19,0.08)",
        lift: "0 10px 25px -5px rgba(22,30,19,0.18), 0 4px 10px -4px rgba(22,30,19,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
