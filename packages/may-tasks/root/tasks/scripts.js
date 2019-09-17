const webpack = require("webpack");

const webpackConfig = require("../webpack.config");

const scripts = cb => {
	// eslint-disable-next-line no-unused-vars
	webpack(webpackConfig, (err, stats) => {
		cb();
	});
};

module.exports.scripts = scripts;
