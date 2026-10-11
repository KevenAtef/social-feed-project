/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#f4efe6',
        black: '#17130d',
        blue: {
          50: '#fdeee6',
          100: '#fbdccb',
          400: '#f06a3a',
          500: '#e8501e',
          600: '#e8501e',
          700: '#c43f12',
        },
        gray: {
          50: '#f4efe6',
          100: '#ece6d6',
          200: '#ddd4c0',
          300: '#c9bfa8',
          400: '#8a8172',
          500: '#57503f',
          600: '#3d3729',
          700: '#2a251c',
          800: '#17130d',
          900: '#0e0b07',
        },
        purple: {
          100: '#ece6d6',
          500: '#e8501e',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Cairo', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      boxShadow: {
        sm: '4px 4px 0 #17130d',
        DEFAULT: '5px 5px 0 #17130d',
        md: '5px 5px 0 #17130d',
        lg: '7px 7px 0 #17130d',
        xl: '9px 9px 0 #17130d',
        '2xl': '10px 10px 0 #17130d',
      },
    },
  },
  plugins: [],
}
