module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
  },
};
