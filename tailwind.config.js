/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '62' : '248px',
        '54' : '220px',
        '26' : '106px',
      },
      backgroundImage: {
        'guns-red': 'linear-gradient(to bottom, rgba(0,0,0,1) 5%, rgba(173,43,58,1) 50%, rgba(0,0,0,1) 100%)'
      },
      screens: {
        media: ['']
      },
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
    plugin(function ({ addVariant }) {
      addVariant('not-placeholder-shown', '&:not(:placeholder-shown)');
    }),
    scrollbar,
  ],
}

