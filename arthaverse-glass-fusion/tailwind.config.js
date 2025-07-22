module.exports = {
  content: ["./views/**/*.{html,ejs}", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255, 255, 255, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
