const path = require("path");

const webpack = require("webpack");

const { plugins } = require("./tasks/helpers/plugins");
const { config } = require("./tasks/helpers/gulp.config");
const { isProduction } = require("./tasks/helpers/utils");

const cwd = process.cwd();

const { proxy } = config.bsyncConfig;
const { baseUrl } = config.root;

let publicPath = baseUrl;

if (proxy && typeof proxy === "string") {
	publicPath = proxy;
}

if (proxy && proxy.taget) {
	publicPath = proxy.target;
}

const { src } = config.tasks.scripts;

const isEntryString = typeof src === "string";
const entryObj = {};

if (!isEntryString) {
	Object.keys(src).forEach(key => {
		entryObj[key] = path.resolve(cwd, src[key]);
	});
}

const entry = isEntryString
	? [
			!isProduction && "webpack/hot/dev-server",
			!isProduction && "webpack-hot-middleware/client",
			path.resolve(cwd, src),
	  ].filter(Boolean)
	: entryObj;

const webpackConfig = {
	entry,

	output: {
		filename: "[name].js",
		path: path.resolve(cwd, config.tasks.scripts.build),
		publicPath,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve("babel-loader"),
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

		minimizer: [isProduction && new plugins.UglifyJsWebpackPlugin()].filter(
			Boolean,
		),
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),

		!isProduction && new webpack.HotModuleReplacementPlugin(),
	].filter(Boolean),

	mode: isProduction ? "production" : "development",
	devtool: !isProduction ? "cheap-module-eval-source-map" : false,

	stats: {
		env: true,
		hash: false,
		modules: false,
		colors: true,
	},
};

module.exports = webpackConfig;
