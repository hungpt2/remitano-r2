/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      minWidth: {
        '640': '640px',
      }
    },
  },
  plugins: [],
  safelist: [{ pattern: /./ }],
}
