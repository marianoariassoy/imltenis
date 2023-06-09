/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f34643",
          secondary: "#D926AA",
          accent: "#1FB2A5",
          neutral: "#2e2f36",
          "base-100": "#1f2023",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#f34643",
        },
      },
    ],
  },
};
