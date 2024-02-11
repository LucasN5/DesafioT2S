/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'NavBarColor': '#242424',
      'HomeColor': '#184A58',
      'BgDarkBlue': '#002EB8',
      'AboutColor': '#00B4E8',
      'BgGrayText': '#7E7E7E',
      'ProdutsColor': '#3264FF',
      'BenefitsColor': '#FFFFFF',
      'ContactColor': '#3F3F3F',
      'ButtonContactColor': '#000000',
      'ButtonHomeColor': '#FFFF66',
    },
    extend: {
      dropShadow: {
        'right-bottom': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'bottom-left': [
            '-5px 2px 4px rgba(0, 0, 0, 0.5)'  
        ]
      },
      width: {
        'WidthProduct': '330px',
      },
      height: {
        'HeightProduct': '2900px',
      },
      fontFamily: {
       header : ['Raleway'], 
        body : ['Assistant'],
      },
    },
  },
  plugins: [],
}

