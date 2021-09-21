const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      transitionProperty: {
        height: "height, max-height",
      },
      spacing: {
        100: "52rem",
      },
      colors: {
        "modern-gray": "#171B1E",
        "main-bg": "#0E1012",
      },
    },
    colors: {
      primary: {
        light: "#3195FF",
        DEFAULT: "#007BFB",
        dark: "#007afc",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
      rotate: ["group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
