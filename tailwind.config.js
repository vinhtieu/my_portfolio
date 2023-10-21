/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "neue-regular": ["NeueMontreal-Regular", "sans-serif"],
        "neue-medium": ["NeueMontreal-Medium", "sans"],
        "neue-bold": ["NeueMontreal-Bold", "sans"],
        intrepid: ["Intrepid", "sans"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
