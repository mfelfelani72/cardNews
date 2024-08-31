const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");





module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
   
      'xs': '410px',
      // => @media (min-width: 475px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }
    },
    pdirection: 'ltr',

    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },

      colors: {
        yellow: '#F0B90A',
        nblue: '#032B44',
        green: '#34C759',
        black: '#000000',
        red: '#E02D2D',
        white: '#fff',
        brown: '#e57c43',
        lightBrown: '#e57c4336',
      },

      backgroundImage: {
        'navy-to-black': 'linear-gradient(to bottom, #032B44, #000000)',
      },

    },

  },
  variants: {
    extend: {},
  },
  plugins: [addVariablesForColors, require("daisyui")],
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