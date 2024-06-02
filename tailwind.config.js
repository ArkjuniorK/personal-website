/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: '"Poppins", sans-serif',
      mono: '"IBM Plex Mono", monospace',
    },
    extend: {
      colors: {
        dark: "#222436",
        darker: "#16161e",
      },
    },
  },
  plugins: [],
};
