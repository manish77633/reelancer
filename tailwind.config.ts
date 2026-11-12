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
        background: "#FCFCFA",
        surface: {
          DEFAULT: "#F0F3EF",
          card: "#F0F3EF",
          muted: "#E8EEE3",
        },
        offwhite: {
          DEFAULT: "#202820",
          muted: "#59645A",
          dim: "#647363",
        },
        lime: {
          DEFAULT: "#24764F",
          hover: "#195c3c",
          dim: "rgba(182, 154, 128, 0.15)",
        },
        live: "#24764F",
        hairline: "rgba(33, 27, 22, 0.16)",
        "hairline-bright": "rgba(33, 27, 22, 0.3)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "rec-blink": "recBlink 1.4s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "film-roll": "filmRoll 12s ease-in-out infinite alternate",
      },
      keyframes: {
        recBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        filmRoll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-8%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
