const gulp = require("gulp"); 
const debug = require("gulp-debug"); 
const gulpif = require("gulp-if"); 
const browsersync = require("browser-sync"); 
const rename = require("gulp-rename"); 
const webpack = require("webpack"); 
const webpackStream = require("webpack-stream"); 

const { config } = require("./helpers/gulp.config"); 
const { isProduction } = require("./helpers/isProduction"); 
const webpackConfig = require("../webpack.config"); 

const scripts = () =>
	gulp
		.src(config.tasks.scripts.src)
		.pipe(
			webpackStream(webpackConfig),
			webpack,
		)
		.pipe(
			gulpif(
				isProduction(),
				rename({
					suffix: ".min",
				}),
			),
		)
		.pipe(gulp.dest(config.tasks.scripts.dist))
		.pipe(
			debug({
				title: "JS files",
			}),
		)
		.on("end", browsersync.reload);

module.exports.scripts = scripts;
