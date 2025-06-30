/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ajuste conforme seu projeto
  ],
  theme: {
    extend: {
      colors: {
        'txttertiary-hover': 'var(--color-txttertiary-hover)',
        // aqui você pode mapear todas as cores do seu CSS global
      },
    },
  },
  plugins: [],
};
