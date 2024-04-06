/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {},
    animation: {
      fadeIn: "fadeIn 2s ease-in-out ",
      progressBarAnimation: "progressBarAnimation 0.8s ease-in-out forwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "35%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      progressBarAnimation: {
        "0%": { width: 0 },
        "100%": { width: "100%" },
      },
    },
  },
  plugins: [],
};
