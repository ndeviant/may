import gulp from "gulp";
import debug from "gulp-debug";
import changed from "gulp-changed";

import { config } from "./helpers/gulp.config";

const assets = () =>
	gulp
		.src(config.tasks.assets.src)
		.pipe(changed(config.tasks.assets.dist))
		.pipe(gulp.dest(config.tasks.assets.dist))
		.pipe(
			debug({
				title: "Assets",
			}),
		);

export { assets };
