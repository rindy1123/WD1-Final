/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        "1/3": "0 1 33.333333%",
      },
      colors: {
        cream: "#e8e1df",
      },
    },
    fontFamily: {
      Poppins: ["Raleway, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
