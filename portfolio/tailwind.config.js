const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color': 'var(--bg-color)',
      },
      backgroundImage: {
        extend: {
          '-mask-radial-gradient': 'radial-gradient(circle at 10% 10%, rgba(128, 0, 128, 1) 30%, rgba(128, 0, 128, 0) 60%), radial-gradient(circle at 90% 90%, rgba(128, 0, 128, 1) 30%, rgba(128, 0, 128, 0) 60%)',
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
