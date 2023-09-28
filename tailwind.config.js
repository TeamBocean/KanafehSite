/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",  './node_modules/tw-elements/dist/js/**/*.{js}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Jakarta': ['Jakarta', 'sans-serif'],
        
      },
      colors: {
        'blue': '#000000',
        'orange': '#FFC300',
        'black': '#100F0F',
      }
    },

  },
  
  plugins: [
    import ('flowbite/plugin')
]
  
}

