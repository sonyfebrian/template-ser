module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        beetle:
          "url('/src/images/sertifikat.jpg')"
      },
      spacing: {
        128: '32rem',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
