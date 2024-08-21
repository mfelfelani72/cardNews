const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");




  
  module.exports = {
      content:['./src/**/*.{js,ts,jsx,tsx,mdx}'], 
      theme: {
        pdirection: 'ltr',
        screens: {
          sm: '350px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        extend: {
          boxShadow: {
            input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
          },

          colors: {
            yellow: '#F0B90A',
            nblue: '#032B44',
            green: '#34C759',
            black: '#000000',
            red:'#E02D2D',
            white:'#fff'
          },

          backgroundImage: {
            'navy-to-black': 'linear-gradient(to bottom, #032B44, #000000)',
          },
          
        },
  
      },
      variants: {
        extend: {},
      },
      plugins: [addVariablesForColors ,require("daisyui")],
    }
    
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );
     
      addBase({
        ":root": newVars,
      });
    }