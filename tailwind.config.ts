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
        panel: "#ECF4E4",
        tint: "#EEF8E6",
        line: "#E8F1E0",
        ink: "#161E13",
        body: "#44483F",
        forest: "#23301C",
        moss: {
          DEFAULT: "#5A7248",
          dark: "#3F5530",
        },
        mint: "#D4EBC4",
        wa: {
          DEFAULT: "#25D366",
          dark: "#1DB954",
        },
        rose: {
          DEFAULT: "#8C3B3B",
          soft: "#FBD9D9",
        },
      },
      fontFamily: {
        serif: ['"Liberation Serif"', "Georgia", '"Times New Roman"', "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,30,19,0.04), 0 8px 24px rgba(22,30,19,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
