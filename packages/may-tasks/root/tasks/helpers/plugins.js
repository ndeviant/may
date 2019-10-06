const gulpLoadPlugins = require("gulp-load-plugins");

module.exports.plugins = gulpLoadPlugins({
	pattern: "*",
	rename: {
		"uglifyjs-webpack-plugin": "UglifyJsWebpackPlugin",
	},
});
