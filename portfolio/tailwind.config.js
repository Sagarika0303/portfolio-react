/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#290748",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #23063d, #2e0850)",
        designColor: "#fffc25",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #23063d, -10px -10px 19px #2e0850",
      },
    },
  },
  plugins: [],
};
