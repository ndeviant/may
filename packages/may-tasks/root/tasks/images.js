const gulp = require("gulp"); 
const debug = require("gulp-debug"); 
const gulpif = require("gulp-if"); 
const browsersync = require("browser-sync"); 
const changed = require("gulp-changed"); 
const imagemin = require("gulp-imagemin"); 
const imageminPngquant = require("imagemin-pngquant"); 
const imageminZopfli = require("imagemin-zopfli"); 
const imageminMozjpeg = require("imagemin-mozjpeg"); 
const imageminGiflossy = require("imagemin-giflossy"); 

const { plumbed } = require("./helpers/plumbed"); 
const { config } = require("./helpers/gulp.config"); 
const { isProduction } = require("./helpers/isProduction"); 

const images = () =>
	gulp
		.src(config.tasks.images.src)
		.pipe(plumbed("Images"))
		.pipe(changed(config.tasks.images.dist))
		.pipe(
			gulpif(
				isProduction,
				imagemin([
					imageminGiflossy({
						optimizationLevel: 3,
						optimize: 3,
						lossy: 2,
					}),
					imageminPngquant({
						speed: 5,
						quality: [0.3, 0.5],
					}),
					imageminZopfli({
						more: true,
					}),
					imageminMozjpeg({
						progressive: true,
						quality: 70,
					}),
					imagemin.svgo({
						plugins: [
							{ removeViewBox: false },
							{ removeUnusedNS: false },
							{ removeUselessStrokeAndFill: false },
							{ cleanupIDs: false },
							{ removeComments: true },
							{ removeEmptyAttrs: true },
							{ removeEmptyText: true },
							{ collapseGroups: true },
						],
					}),
				]),
			),
		)
		.pipe(gulp.dest(config.tasks.images.dist))
		.pipe(
			debug({
				title: "Images",
			}),
		)
		.on("end", browsersync.reload);

module.exports.images = images;
