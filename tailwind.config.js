/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        
        'Montserrat':["Montserrat", 'sans-serif'], 

        'Poppins': ["Poppins", 'sans-serif']
       
      },
      
      }
    },
 
  plugins: [require('daisyui')],
}
  

