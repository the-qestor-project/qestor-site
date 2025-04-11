/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          serif: ['var(--font-garamond)', 'serif'],
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }
  