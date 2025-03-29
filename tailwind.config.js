/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths if needed
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  