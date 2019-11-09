const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");

const svg = () =>
	gulp
		.src(config.tasks.svg.src)
		.pipe(plumbed("Svg"))
		.pipe(
			plugins.svgSprite({
				shape: {
					id: {
						generator: `svg-%s`,
					},
					spacing: {
						padding: 1,
					},
					dimension: {
						maxWidth: 32,
						maxHeight: 32,
					},
				},
				mode: {
					stack: {
						dest: ".",
						bust: false,
						sprite: "sprite.svg",
					},
				},
				svg: {
					namespaceIDs: false,
					namespaceClassnames: false,
				},
			}),
		)
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(config.tasks.svg.build))
		.pipe(
			plugins.debug({
				title: "Svg sprite",
			}),
		)
		.on("end", plugins.browserSync.reload);

module.exports.svg = svg;
