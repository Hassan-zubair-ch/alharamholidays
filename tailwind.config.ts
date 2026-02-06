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
        emerald: {
          deep: "#0d4f3d",
          royal: "#0f766e",
          DEFAULT: "#059669",
          light: "#10b981",
          pale: "#d1fae5",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e5c76b",
          dark: "#9a7b0a",
        },
        charcoal: {
          DEFAULT: "#1f2937",
          dark: "#111827",
          light: "#374151",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-luxury":
          "linear-gradient(135deg, #0d4f3d 0%, #0f766e 50%, #059669 100%)",
        "gradient-gold": "linear-gradient(135deg, #9a7b0a 0%, #c9a227 50%, #e5c76b 100%)",
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(13, 79, 61, 0.25)",
        "luxury-lg": "0 35px 60px -15px rgba(13, 79, 61, 0.3)",
        glow: "0 0 40px rgba(201, 162, 39, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
