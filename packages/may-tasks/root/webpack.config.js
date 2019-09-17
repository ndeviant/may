const path = require("path");

const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const { config } = require("./tasks/helpers/gulp.config");
const { isProduction } = require("./tasks/helpers/isProduction");

const cwd = process.cwd();

const publicPath =
	config.bsyncConfig.proxy && config.bsyncConfig.proxy.target
		? config.bsyncConfig.proxy.target
		: "/";

const webpackConfig = {
	entry: {
		main: [
			!isProduction && "webpack/hot/dev-server",
			!isProduction && "webpack-hot-middleware/client",
			path.join(cwd, config.tasks.scripts.src),
		].filter(Boolean),
	},

	output: {
		filename: "[name].js",
		path: path.join(cwd, config.tasks.scripts.dist),
		publicPath,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								[require.resolve("@babel/preset-env"), { modules: false }],
							],
							plugins: [
								"@babel/plugin-syntax-dynamic-import",
								"@babel/plugin-proposal-class-properties",
								"@babel/plugin-transform-runtime",
							].map(require.resolve),

							cacheDirectory: true,
							cacheCompression: false,
							compact: isProduction,
							babelrc: false,
							configFile: false,
						},
					},
					"webpack-module-hot-accept",
				],
			},
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all",
					minChunks: 1,
					enforce: true,
				},
			},
		},

		minimizer: [isProduction && new UglifyJsPlugin()].filter(Boolean),
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),

		!isProduction && new webpack.HotModuleReplacementPlugin(),

		!isProduction &&
			new webpack.SourceMapDevToolPlugin({
				filename: "maps/[name].js.map",
				exclude: ["vendor.js"],
			}),
	].filter(Boolean),

	mode: isProduction ? "production" : "development",
	devtool: false,

	stats: {
		env: true,
		hash: false,
		modules: false,
		colors: true,
	},
};

module.exports = webpackConfig;