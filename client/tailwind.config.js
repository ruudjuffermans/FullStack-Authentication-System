/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slide-in 0.4s forwards",
        "slide-out": "slide-out 0.4s forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { marginLeft: "120%" },
          "100%": { marginLeft: "0" },
        },
        "slide-out": {
          "0%": { marginLeft: "0" },
          "100%": { marginLeft: "120%" },
        },
      },
      boxShadow: {
        "shadow-md": "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
