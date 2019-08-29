const gulp = require("gulp"); 
const debug = require("gulp-debug"); 
const changed = require("gulp-changed"); 

const { config } = require("./helpers/gulp.config"); 

const assets = () =>
	gulp
		.src(config.tasks.assets.src)
		.pipe(changed(config.tasks.assets.dist))
		.pipe(gulp.dest(config.tasks.assets.dist))
		.pipe(
			debug({
				title: "Assets",
			}),
		);

module.exports.assets = assets;