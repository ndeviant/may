import gulp from "gulp";
import clean from "gulp-clean";
import rename from "gulp-rename";
import { argv } from "yargs";

import { plumbed } from "./plumbed";
import { config } from "./gulp.config";

const { from, to } = argv;

const changeExt = () =>
	gulp
		.src(`${config.root.src}/**/*.${from}`)
		.pipe(plumbed("Change extension"))
		.pipe(clean())
		.pipe(
			rename(path => {
				// eslint-disable-next-line no-param-reassign
				path.extname = `.${to}`;
			}),
		)
		.pipe(gulp.dest(`${config.root.src}/`));

export { changeExt };
