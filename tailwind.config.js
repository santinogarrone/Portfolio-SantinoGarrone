/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surface2: "rgb(var(--color-surface-2) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        violet: "rgb(var(--color-accent) / <alpha-value>)",
        violet2: "rgb(var(--color-accent-strong) / <alpha-value>)",
        violetdim: "rgb(var(--color-accent-dim) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        inkdim: "rgb(var(--color-ink-dim) / <alpha-value>)",
        inkfaint: "rgb(var(--color-ink-faint) / <alpha-value>)",
      },
      fontFamily: {
        disp: ["Unbounded", "sans-serif"],
        ui: ["Space Grotesk", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      maxWidth: {
        wrap: "1360px",
      },
    },
  },
  plugins: [],
};
