const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");
const { isProduction } = require("./helpers/utils");

const images = () =>
	gulp
		.src(config.tasks.images.src)
		.pipe(plumbed("Images"))
		.pipe(plugins.changed(config.tasks.images.dist))
		.pipe(
			plugins.if(
				isProduction,
				plugins.imagemin([
					plugins.imageminGiflossy({
						optimizationLevel: 3,
						optimize: 3,
						lossy: 2,
					}),
					plugins.imageminPngquant({
						speed: 5,
						quality: [0.3, 0.5],
					}),
					plugins.imageminZopfli({
						more: true,
					}),
					plugins.imageminMozjpeg({
						progressive: true,
						quality: 70,
					}),
					plugins.imagemin.svgo({
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
			plugins.debug({
				title: "Images",
			}),
		)
		.on("end", plugins.browserSync.reload);

module.exports.images = images;
