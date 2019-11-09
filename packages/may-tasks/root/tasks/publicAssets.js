const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");

const { config } = require("./helpers/gulp.config");

const publicAssets = () =>
	gulp
		.src(config.tasks.publicAssets.src, { dot: true })
		.pipe(plugins.changed(config.tasks.publicAssets.build))
		.pipe(gulp.dest(config.tasks.publicAssets.build))
		.pipe(
			plugins.debug({
				title: "Public assets",
			}),
		);

module.exports.publicAssets = publicAssets;
