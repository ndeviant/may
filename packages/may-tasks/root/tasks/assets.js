const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");

const { config } = require("./helpers/gulp.config");

const assets = () =>
	gulp
		.src(config.tasks.assets.src)
		.pipe(plugins.changed(config.tasks.assets.dist))
		.pipe(gulp.dest(config.tasks.assets.dist))
		.pipe(
			plugins.debug({
				title: "Assets",
			}),
		);

module.exports.assets = assets;
