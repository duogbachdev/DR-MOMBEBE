/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'slider-bg': 'url("~/assets/img/Slider/BannerSlider.png")'
      }
    }
  },
  plugins: []
}
