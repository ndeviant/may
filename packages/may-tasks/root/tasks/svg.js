const gulp = require("gulp"); 
const plumber = require("gulp-plumber"); 
const debug = require("gulp-debug"); 
const svgSprite = require("gulp-svg-sprite"); 
const browsersync = require("browser-sync"); 

const { plumbed } = require("./helpers/plumbed"); 
const { config } = require("./helpers/gulp.config"); 

const svg = () =>
	gulp
		.src(config.tasks.svg.src)
		.pipe(plumbed("Svg"))
		.pipe(
			svgSprite({
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
			}),
		)
		.pipe(plumber.stop())
		.pipe(gulp.dest(config.tasks.svg.dist))
		.pipe(
			debug({
				title: "Svg sprite",
			}),
		)
		.on("end", browsersync.reload);

module.exports.svg = svg;
