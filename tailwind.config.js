/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#29d9d5',
        dark: '#111',
        darker: '#222',
        light: '#aaa',
      },
    },
  },
  plugins: [],
}