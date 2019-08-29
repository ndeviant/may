// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.

const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
	root: true,

	parser: "babel-eslint",

	extends: ["airbnb-base", "prettier"],

	plugins: ["import", "prettier"],

	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},

	rules: {
		"prettier/prettier": ["warn"],
		indent: "off",
		"import/no-extraneous-dependencies": [2, { devDependencies: true }],
		"import/prefer-default-export": "off",
		"no-plusplus": "off",
		camelcase: "off",
		"no-use-before-define": ["error", { functions: false }],
		"no-restricted-globals": ["error"].concat(restrictedGlobals),
	},
};
