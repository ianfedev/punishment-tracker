const primeui = require('tailwindcss-primeui');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/primeng/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    primeui
  ],
};
