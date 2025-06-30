import type { Config } from 'tailwindcss';

const config: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-bg-primary))",
      },
    },
  },
  plugins: [],
};

export default config;
