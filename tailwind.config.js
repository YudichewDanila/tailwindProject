/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      'minsm':{'raw': '(max-width:310px)'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'minsm':{'raw': '(max-height:200px)'},
      'sm_h': {'raw': '(min-height:200px) and (max-height:350px)'},
      'md_h': {'raw': '(min-height:350px) and (max-height: 450px)'},
      'lg_h': {'raw': '(min-height:450px) and (max-height: 600px)'},
      'xl_h': {'raw': '(min-height:700px) and (max-height: 800px)'},
      '2xl_h': {'raw': '(min-height:800px) and (max-height: 1600px)'},
    },
    extend: {},
  },
  plugins: [
    
  ],
}

