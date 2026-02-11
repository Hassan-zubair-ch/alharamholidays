import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#faf8f5",
        "deep-black": "#0a0a0a",
        accent: {
          blue: "#2563eb",
          purple: "#7c3aed",
          pink: "#ec4899",
          orange: "#f97316",
          green: "#22c55e",
        },
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
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        glow: "0 0 40px rgba(124, 58, 237, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
