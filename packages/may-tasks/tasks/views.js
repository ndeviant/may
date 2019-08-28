import gulp from "gulp";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import twig from "gulp-twig";
import browsersync from "browser-sync";

import { plumbed } from "./helpers/plumbed";
import { config } from "./helpers/gulp.config";
import { isProduction } from "./helpers/isProduction";
import data from "../template.data";
import filters from "./helpers/octoberFilters";

const views = () =>
	gulp
		.src(config.tasks.views.src)
		.pipe(plumbed("Views"))
		.pipe(
			twig({
				base: `${config.root.src}/views/`,
				data,
				filters,
			}),
		)
		.pipe(gulpif(isProduction, replace("main.css", "main.min.css")))
		.pipe(gulpif(isProduction, replace("vendor.js", "vendor.min.js")))
		.pipe(gulpif(isProduction, replace("main.js", "main.min.js")))
		.pipe(gulp.dest(config.tasks.views.dist))
		.on("end", browsersync.reload);

export { views };
