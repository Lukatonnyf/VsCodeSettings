// tailwind.config.js
module.exports = {
  darkMode: 'class', // habilita o controle via classe
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f9fafb', // claro
        'bg-primary-dark': '#1f2937', // escuro (exemplo)
      },
    },
  },
  plugins: [],
};
