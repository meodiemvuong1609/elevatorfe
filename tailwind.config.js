/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './common/components/**/*.{js,vue,ts}',
    './common/layouts/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#292929',
      red: '#EF5149',
      'red-1': '#FEEDED',
      'red-light-1': '#F2746D',
      'red-light-2': '#F59792',
      'red-light-3': '#F9B9B6',
      'red-light-4': '#FCDCDB',
      'red-dark-1': '#D74942',
      'red-dark-2': '#D74942',
      'red-dark-3': '#AE3B35',
      'red-dark-4': '#9D3530',
      'red-dark-5': '#EF4949',
      blue: '#499FEF',
      'blue-1': '#EDF6FE',
      orange: '#EF9949',
      'orange-1': '#FEF5ED',
      green: '#49EF9F',
      'green-1': '#EDFEF6',
      'gray-dark': '#797777',
      gray: '#AAAAAA',
      'gray-1': '#656565',
      'gray-light': '#E2E2E2',
      'gray-light-1': '#F5F5F5',
    },
    extend: {
      fontFamily: {},
    }
  },
  plugins: [],
}
