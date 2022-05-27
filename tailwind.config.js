const theme = require('./theme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {}
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        default: theme
      }
    ]
  }
}
