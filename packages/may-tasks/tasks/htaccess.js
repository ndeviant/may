import gulp from "gulp";
import debug from "gulp-debug";

import { config } from "./helpers/gulp.config";

const htaccess = () =>
	gulp
		.src(config.tasks.htaccess.src)
		.pipe(gulp.dest(config.tasks.htaccess.dist))
		.pipe(
			debug({
				title: "Server config",
			}),
		);

export { htaccess };
