const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { config } = require("./helpers/gulp.config");

const cleanFiles = () =>
	gulp
		.src(config.tasks.cleanFiles.src, {
			read: false,
		})
		.pipe(plugins.clean())
		.pipe(
			plugins.debug({
				title: "Cleaning...",
			}),
		);

module.exports.cleanFiles = cleanFiles;
