import gulp from "gulp";
import plumber from "gulp-plumber";
import debug from "gulp-debug";
import svgSprite from "gulp-svg-sprite";
import browsersync from "browser-sync";

import { plumbed } from "./helpers/plumbed";
import { config } from "./helpers/gulp.config";

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

export { svg };
