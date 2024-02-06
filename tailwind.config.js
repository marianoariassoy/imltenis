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
          'base-100': '#202020'
        }
      },
      {
        light: {
          primary: '#4ddb7f',
          'base-content': '#666',
          'base-100': '#f7f7FF'
        }
      }
    ]
  }
}
