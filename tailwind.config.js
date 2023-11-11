/*eslint-disable*/
const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{html,js}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    "neon":{
      extend: "dark",
        colors: {
          primary : {
            red: "#f00",

        },
      },
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
