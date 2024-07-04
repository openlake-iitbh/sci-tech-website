/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        'clr' : 'rgba(109, 109, 110, 0.7)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(105, 158, 210, 0.25) 0%, rgba(140, 186, 233, 0.1875) 56%, rgba(175, 215, 255, 0.0125) 100%)',
      },
    },
  },
  plugins: [],
}

