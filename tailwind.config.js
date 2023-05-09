/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  variants: {
    width: ["responsive", "hover", "focus"]
  },
  theme: {
      extend: {
        animation:{
          slowbounce: 'slowbounce 2s infinite'
        },
        keyframes: {
          slowbounce: {
            '0%, 100%': { 
              transform: 'translateY(5px)',
              borderColor:'rgb(74 222 128)',
              color:'rgb(22 163 74)',
              scale:'1.1'
            },
            '50%': { 
              transform: 'translateY(1px)',
            },
          }
        }
      },
  },
  plugins: [],
}