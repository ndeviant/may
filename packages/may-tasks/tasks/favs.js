const gulp = require("gulp");
const debug = require("gulp-debug");
const favicons = require("gulp-favicons");

const { config } = require("./helpers/gulp.config");

const favs = () =>
	gulp
		.src(config.tasks.favs.src)
		.pipe(
			favicons({
				background: "transparent",
				icons: {
					appleIcon: true,
					favicons: true,
					online: false,
					appleStartup: false,
					android: false,
					firefox: false,
					yandex: false,
					windows: false,
					coast: false,
				},
			}),
		)
		.pipe(gulp.dest(config.tasks.favs.dist))
		.pipe(
			debug({
				title: "Favicons",
			}),
		);

module.exports.favs = favs;
