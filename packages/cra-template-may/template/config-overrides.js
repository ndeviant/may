/* eslint-disable no-param-reassign, react-hooks/rules-of-hooks */
const {
  override,
  useBabelRc,
  addBundleVisualizer,
} = require('customize-cra');

const eslintConfigCRA = {
  rules: {
    'no-unused-expressions': 0,
  },
};

const rewriteEslintConfig = (eslintConfig = {}) => (config) => {
  const eslintRule = config.module.rules.filter((r) => {
    return (
      r.use &&
      r.use.some((u) => u.options && u.options.useEslintrc !== undefined)
    );
  })[0];

  eslintRule.use[0].options.baseConfig = {
    ...eslintRule.use[0].options.baseConfig,
    ...eslintConfig,
  };

  const rules = config.module.rules.map((r) => {
    return r.use &&
      r.use.some((u) => u.options && u.options.useEslintrc !== undefined)
      ? eslintRule
      : r;
  });
  config.module.rules = rules;

  return config;
};

module.exports = (config, env) => {
  override(
    rewriteEslintConfig(eslintConfigCRA),

    useBabelRc(),
    addBundleVisualizer(null, true),
  )(config, env);

  return config;
};
