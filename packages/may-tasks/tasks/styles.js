const gulp = require("gulp"); 
const debug = require("gulp-debug"); 
const gulpif = require("gulp-if"); 
const plumber = require("gulp-plumber"); 
const sass = require("gulp-sass"); 
const mqpacker = require("css-mqpacker"); 
const sortCSSmq = require("sort-css-media-queries"); 
const mincss = require("gulp-clean-css"); 
const autoprefixer = require("autoprefixer"); 
const browsersync = require("browser-sync"); 
const postcss = require("gulp-postcss"); 
const sourcemaps = require("gulp-sourcemaps"); 
const rename = require("gulp-rename"); 

const { plumbed } = require("./helpers/plumbed"); 
const { config } = require("./helpers/gulp.config"); 
const { isProduction } = require("./helpers/isProduction"); 

const styles = () =>
	gulp
		.src(config.tasks.styles.src)
		.pipe(gulpif(!isProduction(), sourcemaps.init()))
		.pipe(plumbed("Styles"))
		.pipe(
			sass({
				includePaths: ["./node_modules"],
			}),
		)
		.pipe(
			postcss(
				[
					mqpacker({
						sort: sortCSSmq,
					}),
					isProduction() ? autoprefixer() : false,
				].filter(Boolean),
			),
		)
		.pipe(
			gulpif(
				isProduction(),
				mincss({
					compatibility: "ie8",
					level: {
						1: {
							specialComments: 0,
							removeEmpty: true,
							removeWhitespace: true,
						},
						2: {
							mergeMedia: true,
							removeEmpty: true,
							removeDuplicateFontRules: true,
							removeDuplicateMediaBlocks: true,
							removeDuplicateRules: true,
							removeUnusedAtRules: false,
						},
					},
				}),
			),
		)
		.pipe(
			gulpif(
				isProduction(),
				rename({
					suffix: ".min",
				}),
			),
		)
		.pipe(plumber.stop())
		.pipe(gulpif(!isProduction(), sourcemaps.write("./maps/")))
		.pipe(gulp.dest(config.tasks.styles.dist))
		.pipe(
			debug({
				title: "CSS files",
			}),
		)
		.pipe(browsersync.stream());

module.exports.styles = styles;
