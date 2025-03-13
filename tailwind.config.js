/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1462px",
        "2xl": "1536px",
        custom: "1800px",
      },
      animation: {
        "bounce-x": "bounceX 1s infinite alternate",
      },
      keyframes: {
        bounceX: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(50px)" },
        },
      },
    },
  },
  plugins: [],
};
