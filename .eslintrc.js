module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'import/no-unresolved': 'error',
    'import/first': 0,
    'no-console': 0,
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
  },
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  // settings: {
  //   'import/parsers': ['.ts', '.tsx'],
  //   'import/resolver': {
  //     typescript: {
  //       alwaysTryTypes: true,
  //     },
  //   },
  // },
};
