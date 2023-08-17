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
        mytheme: {
          'base-content': '#9d9c9c',
          primary: '#f34643',
          accent: '#f34643',
          'base-100': '#1c1c1e'
          // 'base-100': '#18181b',
        }
      }
    ]
  }
}
