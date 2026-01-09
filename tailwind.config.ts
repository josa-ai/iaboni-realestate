import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        "primary-soft": "#2d2d2d",
        accent: "#c45c3e",
        "accent-light": "#d97a5f",
        surface: "#fafaf9",
        "surface-elevated": "#ffffff",
        border: "rgba(0, 0, 0, 0.08)",
        "text-primary": "#1a1a1a",
        "text-secondary": "#6b6b6b",
        "text-muted": "#9a9a9a",
      },
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
