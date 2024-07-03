/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  ignorePatterns: ['dist', 'node_modules', 'components.d.ts'],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
    {
      files: ['*.html'],
      parser: 'html-eslint-parser',
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: [
      './tsconfig.json',
      './tsconfig.app.json',
      './tsconfig.node.json',
      './tsconfig.vitest.json',
      './cypress/e2e/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
  },
  plugins: ['html'],
};
