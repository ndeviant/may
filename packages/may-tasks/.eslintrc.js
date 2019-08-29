module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": ["airbnb-base", "prettier"],
	"plugins": ["prettier"],
	"rules": {
		"prettier/prettier": ["error"],
		"indent": "off",
		"import/no-extraneous-dependencies": [2, { devDependencies: true }],
		"import/prefer-default-export": "off",
		"no-plusplus": "off",
		"camelcase": "off",
		"no-use-before-define": ["error", { "functions": false }],
	}
}