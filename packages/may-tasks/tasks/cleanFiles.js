import gulp from "gulp";
import clean from "gulp-clean";
import debug from "gulp-debug";

import { config } from "./helpers/gulp.config";

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

export { cleanFiles };
