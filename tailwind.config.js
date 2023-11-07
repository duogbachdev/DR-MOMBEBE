/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'slider-bg': 'url("~/assets/img/Slider/BannerSlider.png")',
        'slider-bg2': 'url("~/assets/img/Slider/Artboard.png")',
        'slider-bg3': 'url("~/assets/img/Slider/Artboard2.png")',
        'slider-bg4': 'url("~/assets/img/Slider/Artboard8.png")',
        'slider-bg5': 'url("~/assets/img/Slider/Artboard9.png")'
      }
    }
  },
  plugins: []
}
