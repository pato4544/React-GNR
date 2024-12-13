/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bebasneue: ['Bebas Neue', 'sans-serif'],
        playfairdisplay: ['Playfair Display', 'sans-seriff'],
        gaMaamli: ['Ga Maamli', 'sans-serif'],
        rowdies: ['Rowdies', 'sans-serif'],
        lato: ['Lato']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

