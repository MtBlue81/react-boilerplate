module.exports = {
  processors: ['stylelint-processor-styled-components'],
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
  },
};
