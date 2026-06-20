/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo-aligned palette: deep navy, olive green, cream, orange hint.
        ink: {
          DEFAULT: "#16314F", // deep navy (text + dark sections)
          soft: "#33485F",
          muted: "#536678",
        },
        sand: {
          50: "#F8F4EB", // off-white / cream
          100: "#F1E9D8",
          200: "#E6D7BE",
          300: "#D6C19F",
        },
        amber: {
          brand: "#E0922B", // orange — used as a hint
          soft: "#EFAE53",
          deep: "#A86A14",
        },
        green: {
          brand: "#5E7B2F", // olive green (logo wordmark)
          soft: "#86A34D",
          deep: "#445F1E",
        },
        // alias kept so any existing `teal-*` usage maps to the brand green
        teal: {
          brand: "#5E7B2F",
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
        heroZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        // Slow, GPU-only Ken Burns effect for the hero video.
        heroZoom: "heroZoom 24s ease-in-out infinite alternate",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
