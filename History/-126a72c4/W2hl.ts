// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // ou seu caminho para os arquivos
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow-sm': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'custom-shadow-md': '0 4px 8px rgba(0, 0, 0, 0.4)',
        'custom-shadow-lg': '0 8px 16px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
