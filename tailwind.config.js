module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors:{
        first: '#F2F4F5',
        second: '#FFC222',
        third: '#06454C',
        fourth: '#032B2D',
        fifth: '#0B848B',
        sixth: '#11BECC'
       },
       fontFamily:{
         poppins: ['Poppins']
       },
       columns: {
        auto: 'auto',
        h_1: '139px',
        w_1: '243px',
        logo_left: '818px',
        logo_top: '212px',
        2: '2',
      }  
  },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
