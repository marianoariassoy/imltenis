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
          'base-content': '#8c8c8c',
          primary: '#f34643',
          'base-100': '#212121',
          'base-300': '#252525'
        },
        light: {
          'base-content': '#FFF',
          primary: '#FFF',
          'base-100': '#0d7350',
          'base-300': '#0d7350'
        }
      }
    ]
  }
}
