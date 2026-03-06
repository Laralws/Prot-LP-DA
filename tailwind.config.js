/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        brilhoIntercalado: {
          '0%, 100%': { 
            'background-position': '0% 50%', 
            'box-shadow': '0 4px 15px rgba(59, 130, 246, 0.2)' 
          },
          '50%': { 
            'background-position': '100% 50%', 
            'box-shadow': '0 4px 25px rgba(59, 130, 246, 0.5)' 
          },
        },
      },
      animation: {
        'brilho-lento': 'brilhoIntercalado 4s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}