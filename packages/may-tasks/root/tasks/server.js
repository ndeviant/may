const gulp = require("gulp");
const webpack = require("webpack");

const { favs } = require("./favs");
const { images } = require("./images");
const { styles } = require("./styles");
const { svg } = require("./svg");
const { views } = require("./views");
const { webp } = require("./webp");
const { publicAssets } = require("./publicAssets");

const { plugins } = require("./helpers/plugins");
const { config } = require("./helpers/gulp.config");
const { isProduction } = require("./helpers/utils");
const webpackConfig = require("../webpack.config");

const { bsyncConfig, tasks } = config;

if (!bsyncConfig.middleware) bsyncConfig.middleware = [];

if (!isProduction) {
	const webpackCompiler = webpack(webpackConfig);

	bsyncConfig.middleware.push(
		plugins.webpackDevMiddleware(webpackCompiler, {
			publicPath: webpackConfig.output.publicPath,
			stats: webpackConfig.stats,
			noInfo: true,
			writeToDisk: true,
		}),
		plugins.webpackHotMiddleware(webpackCompiler),
	);
}

const server = () => {
	plugins.browserSync.init(bsyncConfig);

	gulp.watch(tasks.publicAssets.watch, publicAssets);

	if (tasks.views.run) {
		gulp.watch(tasks.views.watch, views);
	}

	if (tasks.styles.run) {
		gulp.watch(tasks.styles.watch, styles);
	}

	if (tasks.images.run) {
		gulp.watch(tasks.images.watch, images);
	}

	if (tasks.webp.run) {
		gulp.watch(tasks.webp.watch, webp);
	}

	if (tasks.favs.run) {
		gulp.watch(tasks.favs.watch, favs);
	}

	if (tasks.svg.run) {
		gulp.watch(tasks.svg.watch, svg);
	}
};

module.exports.server = server;
