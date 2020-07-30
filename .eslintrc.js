module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/prop-types': 0,
  },
};
