module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // // These rules are for style purposes only, please fix your code before
    // // adding rules that disable things
    // '@typescript-eslint/member-delimiter-style': [
    //   'error',
    //   {
    //     multiline: {
    //       delimiter: 'none',
    //       requireLast: true,
    //     },
    //     singleline: {
    //       delimiter: 'semi',
    //       requireLast: false,
    //     },
    //   },
    // ],
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   { argsIgnorePattern: '^_', ignoreRestSiblings: false },
    // ],
    // 'prefer-template': 'error',
    // 'react/display-name': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // yoda: ['error', 'never'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
}
