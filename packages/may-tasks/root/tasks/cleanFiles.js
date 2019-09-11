const gulp  = require("gulp");
const clean = require("gulp-clean"); 
const debug = require("gulp-debug"); 

const { config } = require("./helpers/gulp.config"); 

const cleanFiles = () =>
	gulp
		.src(config.tasks.cleanFiles.src, {
			read: false,
		})
		.pipe(clean())
		.pipe(
			debug({
				title: "Cleaning...",
			}),
		);

module.exports.cleanFiles = cleanFiles;
