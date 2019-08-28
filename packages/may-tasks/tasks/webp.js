import gulp from "gulp";
import gulpif from "gulp-if";
import changed from "gulp-changed";
import imageminWebp from "imagemin-webp";
import gulpwebp from "gulp-webp";
import debug from "gulp-debug";

import { plumbed } from "./helpers/plumbed";
import { config } from "./helpers/gulp.config";
import { isProduction } from "./helpers/isProduction";

const webp = () =>
	gulp
		.src(config.tasks.webp.src)
		.pipe(plumbed("WebP"))
		.pipe(changed(config.tasks.webp.dist))
		.pipe(
			gulpwebp(
				gulpif(
					isProduction,
					imageminWebp({
						lossless: true,
						quality: 90,
						alphaQuality: 90,
					}),
				),
			),
		)
		.pipe(gulp.dest(config.tasks.webp.dist))
		.pipe(
			debug({
				title: "WebP images",
			}),
		);

export { webp };
