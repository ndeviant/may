const gulp = require("gulp");
const browsersync = require("browser-sync");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const { favs } = require("./favs");
const { images } = require("./images");
const { styles } = require("./styles");
const { svg } = require("./svg");
const { views } = require("./views");
const { webp } = require("./webp");
const { assets } = require("./assets");

const { config } = require("./helpers/gulp.config");
const { isProduction } = require("./helpers/isProduction");
const webpackConfig = require("../webpack.config");

const { bsyncConfig, tasks } = config;

const webpackCompiler = webpack(webpackConfig);

if (!isProduction) {
	if (!bsyncConfig.middleware) bsyncConfig.middleware = [];

	bsyncConfig.middleware.push(
		webpackDevMiddleware(webpackCompiler, {
			publicPath: webpackConfig.output.publicPath,
			stats: webpackConfig.stats,
			noInfo: true,
		}),
		webpackHotMiddleware(webpackCompiler),
	);
}

const server = () => {
	browsersync.init(bsyncConfig);

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

	if (tasks.assets.run) {
		gulp.watch(tasks.assets.watch, assets);
	}
};

module.exports.server = server;
