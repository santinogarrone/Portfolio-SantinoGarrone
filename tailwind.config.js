/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08070C",
        surface: "#100D18",
        surface2: "#17131F",
        line: "#2A2438",
        violet: "#A855F7",
        violet2: "#7C3AED",
        violetdim: "#4C1D95",
        ink: "#F3F0FA",
        inkdim: "#9A93B0",
        inkfaint: "#55506A",
      },
      fontFamily: {
        disp: ["Unbounded", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        wrap: "1360px",
      },
    },
  },
  plugins: [],
};
