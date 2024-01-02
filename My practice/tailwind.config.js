/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      xl2: "1440px",
    },
    extend: {
      colors: {
        myBrown: "#A55335",
        myBlue: "#005A77",
        darkMyBlue: "#313F47",
        grayishBlue: "#",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        yeseva: ["Yeseva One", "sans-serif"],
      },
      backgroundImage: () => ({
        catalogSection: "url('../images/catalog-bg.png')",
      }),
    },
  },
  plugins: [],
};
