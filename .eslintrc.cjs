/* eslint-disable no-undef */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    // 'eslint-disable-next-line': off,
    'no-promise-executor-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    camelcase: 'off',
    'no-console': 'off',
  },

}
