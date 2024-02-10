/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          'base-content': '#9d9c9d',
          primary: '#f34643',
          accent: '#f34643',
          'base-100': '#202020',
          'base-300': '#252525'
        },
        light: {
          primary: '#94B9AF'
        }
      }
    ]
  }
}
