/** @type {import('tailwindcss').Config} */
// import url('https://fonts.google.com/specimen/Vazirmatn?preview.size=21&query=vazir');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '360px',
      'tablet': '640px',
      'min_laptop':'768px',
      'laptop': '1024px',
      'desktop': '1280px',

    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // fontFamily: {
      //   vazir: 'vazir',
      // },
      colors: {
        'darkBlue': '#102C51',
        'blue1':'#DFE6EB',
        'blue2':'#1FAAEA',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],

};