const gulp = require("gulp"); 
const debug = require("gulp-debug"); 

const { config } = require("./helpers/gulp.config"); 

const htaccess = () =>
	gulp
		.src(config.tasks.htaccess.src)
		.pipe(gulp.dest(config.tasks.htaccess.dist))
		.pipe(
			debug({
				title: "Server config",
			}),
		);

module.exports.htaccess = htaccess;
