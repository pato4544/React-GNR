/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';
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
    scrollbar,
  ],
}

