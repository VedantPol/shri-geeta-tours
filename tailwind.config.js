/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#16110D",
          soft: "#3A322B",
          muted: "#6B6157",
        },
        sand: {
          50: "#FBF8F3",
          100: "#F5EFE6",
          200: "#EAE0D2",
          300: "#DCCDB6",
        },
        amber: {
          brand: "#C8662B",
          soft: "#E0894F",
          deep: "#A8501C",
        },
        teal: {
          brand: "#1F5E5B",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kicker: "0.22em",
      },
      maxWidth: {
        shell: "1240px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
