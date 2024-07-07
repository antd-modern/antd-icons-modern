import { defineConfig } from 'father';

const config = defineConfig({
  // Locked version only supports 1.0.0
  plugins: ['@rc-component/father-plugin'],
  targets: { chrome: 86 },
});

export default config;
