/* eslint-disable no-template-curly-in-string */

const plugins = [
  [
    '@babel/plugin-proposal-decorators',
    {
      decoratorsBeforeExport: true,
    },
  ],
  '@babel/plugin-proposal-optional-chaining',
  'babel-plugin-styled-components',
];

module.exports = { plugins };
