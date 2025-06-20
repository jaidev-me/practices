/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        'md':'600px',
        'xmd': '860px',
        'slg':'800px',
        '1000px':'1000px',
        '1300px':'1300px',
        'lg': '1100px',
        'xsm':'400px'
      },
      animation: {
        'slide': 'slide 0.5s ease-in-out',
        'backSlide': 'backSlide 0.5s ease-in-out',
      },
      keyframes: {
        slide: {
          'from': { transform: 'translateX(100%)',opacity:'0' },
          'to': { transform:'translateX(0)',opacity:'100%' },
        },
        backSlide: {
          'from': { transform: 'translateX(-100%)',opacity:'0' },
          'to': { transform:'translateX(0)',opacity:'100%' },
        }
      }
    },
  },
  plugins: [],
}
