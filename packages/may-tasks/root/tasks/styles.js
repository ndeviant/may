const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");
const { isProduction } = require("./helpers/utils");

const styles = () =>
	gulp
		.src(config.tasks.styles.src)
		.pipe(plugins.if(!isProduction, plugins.sourcemaps.init()))
		.pipe(plumbed("Styles"))
		.pipe(
			plugins.sass({
				// `../../node_modules` is hack for lerna monorepos
				includePaths: ["./node_modules", "../../node_modules"],
			}),
		)
		.pipe(
			plugins.postcss(
				[
					plugins.cssMqpacker({
						sort: plugins.sortCssMediaQueries,
					}),
					isProduction ? plugins.autoprefixer() : false,
				].filter(Boolean),
			),
		)
		.pipe(
			plugins.if(
				isProduction,
				plugins.cleanCss({
					compatibility: "ie8",
					level: {
						1: {
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
		.pipe(plugins.plumber.stop())
		.pipe(plugins.if(!isProduction, plugins.sourcemaps.write()))
		.pipe(gulp.dest(config.tasks.styles.build))
		.pipe(
			plugins.debug({
				title: "CSS files",
			}),
		)
		.pipe(plugins.browserSync.stream());

module.exports.styles = styles;
