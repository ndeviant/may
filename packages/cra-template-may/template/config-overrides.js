/* eslint-disable no-param-reassign, react-hooks/rules-of-hooks */
const { override, useBabelRc, addBundleVisualizer } = require('customize-cra');

const eslintConfigCRA = {
  rules: {
    'no-unused-expressions': 0,
  },
};

const rewriteEslintConfig = (configRules = {}) => config => {
  const updatedRules = config.module.rules.map(rule => {
    // Only target rules that have defined a `useEslintrc` parameter in their options
    if (
      rule.use &&
      // eslint-disable-next-line no-void
      rule.use.some(use => use.options && use.options.useEslintrc !== void 0)
    ) {
      const ruleUse = rule.use[0];
      const baseOptions = ruleUse.options;
      const baseConfig = baseOptions.baseConfig || {};
      const newOptions = {
        useEslintrc: false,
        ignore: true,
        baseConfig: { ...baseConfig, ...configRules },
      };
      ruleUse.options = newOptions;
      return rule;
    }

    // Rule not using eslint. Do not modify.
    return rule;
  });

  config.module.rules = updatedRules;
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
