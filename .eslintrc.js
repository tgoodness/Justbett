/* eslint-disable no-undef */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'no-unused-vars': 1,
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
