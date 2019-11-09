const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { config } = require("./helpers/gulp.config");

const htaccess = () =>
	gulp
		.src(config.tasks.htaccess.src)
		.pipe(gulp.dest(config.tasks.htaccess.build))
		.pipe(
			plugins.debug({
				title: "Server config",
			}),
		);

module.exports.htaccess = htaccess;
