/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "neue-thin": ["NeueMontreal-Light", "sans-serif"],
        "neue-regular": ["NeueMontreal-Regular", "sans-serif"],
        "neue-medium": ["NeueMontreal-Medium", "sans"],
        "neue-bold": ["NeueMontreal-Bold", "sans"],
        intrepid: ["Intrepid", "sans"],
      },
      animation: {
        fadeIn: "2.5s linear 0s 1 normal both fadeIn",
        slideInUp: "1.5s ease-out 0s 1 normal both slideInUp",
      },
      keyframes: {
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
