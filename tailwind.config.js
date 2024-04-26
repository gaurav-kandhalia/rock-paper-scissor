// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':{'min':'450px', 'max':'650px'}
      },
   
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgb(31, 55, 86), rgb(20, 21, 57))',
        'radial-gradient':  "radial-gradient(circle at center, rgb(31, 55, 86,0.5), rgb(20, 21, 5,0.5))"
      },
      boxShadow: {
        'radial-custom': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        
      },
      
      fontFamily: {
        'barlow-semi-condensed': ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

// colors: {
//   scissor: {
//     'border': 'linear-gradient(to bottom, rgb(236, 158, 14), rgb(236, 169, 34))'
//   },
//   paper: {
//     'border': 'linear-gradient(to bottom, rgb(72, 101, 244), rgb(86, 113, 245))'
//   },
//   rock: {
//     'border': 'linear-gradient(to bottom, rgb(220, 46, 78), hsl(349, 70%, 56%))'
//   },
//   lizard: {
//     'border': 'linear-gradient(to bottom, rgb(131, 79, 227), rgb(140, 93, 229))'
//   },
//   spock: {
//     'border': 'linear-gradient(to bottom, rgb(64, 185, 206), rgb(82, 190, 209))'
//   },
// },