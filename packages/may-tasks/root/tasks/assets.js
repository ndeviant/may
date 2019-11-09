const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");

const { config } = require("./helpers/gulp.config");

const assets = () =>
	gulp
		.src(config.tasks.assets.src)
		.pipe(plugins.changed(config.tasks.assets.build))
		.pipe(gulp.dest(config.tasks.assets.build))
		.pipe(
			plugins.debug({
				title: "Assets",
			}),
		);

module.exports.assets = assets;
