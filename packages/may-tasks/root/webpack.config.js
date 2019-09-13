const webpack = require("webpack");

const { isProduction } = require("./tasks/helpers/isProduction");

const webpackConfig = {
	output: {
		filename: "[name].js",
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
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
						compact: isProduction(),
						babelrc: false,
						configFile: false,
					},
				},
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
	},

	plugins: [
		!isProduction() &&
			new webpack.SourceMapDevToolPlugin({
				filename: "maps/[name].js.map",
				lineToLine: true,
			}),
	].filter(Boolean),
};

webpackConfig.mode = isProduction() ? "production" : "development";
webpackConfig.devtool = isProduction() ? false : "cheap-eval-source-map";

module.exports = webpackConfig;
