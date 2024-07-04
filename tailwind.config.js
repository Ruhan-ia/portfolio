  /* eslint-disable no-dupe-keys */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        tilt: 'tilt 10s infinite linear',
        blob:"blob 7s infinite"
      },
      keyframes:{
        tilt:{
          "0%, 50%, 100%":{
            transform:"rotate(0deg)",
          },
          "25%":{
            transform:"rotate(2deg)",
          },
          "75%":{
            transform: "rotate(-2deg)",
          },
        },
        blob:{
          "0%":{
            transform:"translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform:"translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform:"translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            transform:"translate(0px, 0px) scale(1)"
          },
        },
      },
      fontFamily:{
        spaceGrotest:['Space Grotesk', 'sans-serif'],
        roboto:["Roboto", "sans-serif"]
      },
   
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula"],
  },
}

