/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
    },
    extend: {
      colors: {
        'primaryColor': '#0E512E',
        'whitesmoke': '#f5f5f5',
        'appbarBorder': '#707070',
        'tabBorder': '#EBEBEB',
        'tabSurface': '#F7F7F7',
        'brown': '#6F6F6F',
        'alert': '#FDF4F4',
        'tabUnselected': '#868686',
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }

  },
  plugins: [

  ],
}