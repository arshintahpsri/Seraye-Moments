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
        cream: "#FBF9F6",
        sand: "#F3F2EE",
        stone: "#EBE9E4",
        line: "#E3E0D9",
        ink: "#1A1A1A",
        muted: "#55524C",
        moss: {
          DEFAULT: "#5A7248",
          dark: "#3F5530",
          soft: "#6A8257",
        },
        rose: {
          DEFAULT: "#7B4A4A",
          soft: "#FBD9D9",
        },
        mint: "#D4EBC4",
        honey: {
          DEFAULT: "#FCE18A",
          dark: "#6B5A0A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        label: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(26,26,26,0.04), 0 8px 24px rgba(26,26,26,0.05)",
        lift: "0 12px 32px rgba(26,26,26,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
