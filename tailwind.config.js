/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      'xs':'475px',
      'sm':'640px',
      'md':'800px',
      'lg':'1000px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: { //the extend them is usewhen wed like to add new values and also preserve the defauult values. nb even the  screens property could be added to extend if we intend to keep the default values else just use the scrren property alone
      backgroundImage:{
        'bg-pattern' : "url('/picture/tanzania.jpg')",
        'bg-promo': "url('/picture/promo.png')",
      }
    },
  },
  plugins: [],
}
