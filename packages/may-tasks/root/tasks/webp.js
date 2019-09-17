const gulp = require("gulp"); 
const debug = require("gulp-debug"); 
const gulpif = require("gulp-if"); 
const changed = require("gulp-changed"); 
const gulpwebp = require("gulp-webp"); 
const imageminWebp = require("imagemin-webp"); 

const { plumbed } = require("./helpers/plumbed"); 
const { config } = require("./helpers/gulp.config"); 
const { isProduction } = require("./helpers/isProduction"); 

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

module.exports.webp = webp;
