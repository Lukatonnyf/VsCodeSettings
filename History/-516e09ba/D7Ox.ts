import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontSize: {
        ssm: 'var(--txt-ssm)',
      },
    }
  }
};

export default config;
