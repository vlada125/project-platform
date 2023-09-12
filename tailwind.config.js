/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "920px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        primary: "Manrope",
        inter: "Inter",
      },
      colors: {
        primary: "#01174F",
        grey: "#787878",
        bgColorGrey: "#DADADA",
        secondary: "#556489",
        lightBlue: "#00C5FF",
        border: "#DBDBDB",
        borderPrimary: "#323232",
        primaryBg: "#E3F0FF",
        buttonPrimary: "#0070C0",
        white: "#FFFFFF",
        textColorPrimary: "#323232",
        bgColorGreen: '#c6efce',
        dark: "#323232", 
        brandGray: "#798488",  
        brandBlue: "#08B4EB",  
        brandBlueDark: "#0945B8",
        gray: {
          '5c': '#5C5C5C',
          'f9': '#F9F9F9'
        },
      },
      backgroundImage: {
        'home-back': "url('/images/general/home-back.png')",
        'g1': 'linear-gradient(102deg, #018EBC 0%, #7265A7 88.02%)',
        'g2': 'linear-gradient(118deg, rgba(3,189,244,1) 0%, rgba(224,28,167,1) 100%)',
        'chat-popup-title': 'linear-gradient(178deg, #0232AC 21.7%, #67D6F9)',
        'chat-speech': 'linear-gradient(168.19deg, #0E45B5 0.35%, #66D6F9 105.68%)'
      }
    },
    fontFamily: {
      spartan: ["Spartan", "sans-serif"],
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 30px",
          // "@screen sm": {
          //   maxWidth: "520px",
          // },
          // "@screen md": {
          //   maxWidth: "880px",
          // },
          // "@screen lg": {
          //   maxWidth: "1300px",
          // },
          // "@screen xl": {
          //   maxWidth: "1400px",
          // },
          "@screen 2xl": {
            maxWidth: "1800px",
            margin: "0 auto",
          },
        },
        ".button-primary-gradient": {
          background: "linear-gradient(142deg, #02BCF3 31.68%, #DF1BA7 78.47%)",
        },
        ".shadow-primary": {
          boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        },
        ".card-shadow": {
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        },
        ".card-shadow-hover": {
          boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.4)"
        },
      });
    },
  ],
};
