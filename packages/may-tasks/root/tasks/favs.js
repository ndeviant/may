const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { config } = require("./helpers/gulp.config");

const favs = () =>
	gulp
		.src(config.tasks.favs.src)
		.pipe(
			plugins.favicons({
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
			plugins.debug({
				title: "Favicons",
			}),
		);

module.exports.favs = favs;
