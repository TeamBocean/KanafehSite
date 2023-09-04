/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
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
      }
    },

  },
  plugins: [
    import ('flowbite/plugin')
  ],
}

