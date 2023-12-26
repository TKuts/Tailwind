/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
			xl: "1200px",
      xl2: "1440px"
    },
    extend: {
      colors: {
        myBrown: "#A55335",
        myBlue: "005A77",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        yeseva: ["Yeseva One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
