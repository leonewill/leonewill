// tailwind.config.js (Tailwind v3)
module.exports = {
  darkMode: 'media', // ou 'class'
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // breakpoints extras
      screens: {
        '2xsm': '320px',
        'xsm' : '375px',
        'lm'  : '1100px',
      },

      // família tipográfica
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },

      // suas cores customizadas
      colors: {
        black_500: 'rgba(0,0,0,0.5)',
        black_750: 'rgba(0,0,0,0.75)',
        white_50 : 'rgba(255,255,255,0.05)',
        white_75 : 'rgba(255,255,255,0.075)',
        white_100: 'rgba(255,255,255,0.1)',
        white_500: 'rgba(255,255,255,0.5)',
        deep_grey: '#202020',
        heavy_grey: '#202020',
        dark_grey: '#777777',
        grey     : '#CCCCCC',
        light_grey: '#F0F0F0',
        deep_blue : '#242CA4',
        light_green: '#34FFA4',
        dim_grey   : '#101010',
        red        : '#D01414',
        red_ascent : '#FF5252',
      },

      // tamanhos extras (opcional)
      fontSize: {
        '8xl': '6rem',  // sem ponto-e-vírgula!
        '9xl': '8rem',
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
    },
  },
  plugins: [
    // NÃO precisa de tailwindcss-filters no v3.
    // Se quiser muito usar, instale e descomente:
    // require('tailwindcss-filters')
  ],
};
