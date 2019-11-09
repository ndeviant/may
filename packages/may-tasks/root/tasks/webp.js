const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");
const { isProduction } = require("./helpers/utils");

const webp = () =>
	gulp
		.src(config.tasks.webp.src)
		.pipe(plumbed("WebP"))
		.pipe(plugins.changed(config.tasks.webp.build))
		.pipe(
			plugins.webp(
				plugins.if(
					isProduction,
					plugins.imageminWebp({
						lossless: true,
						quality: 90,
						alphaQuality: 90,
					}),
				),
			),
		)
		.pipe(gulp.dest(config.tasks.webp.build))
		.pipe(
			plugins.debug({
				title: "WebP images",
			}),
		);

module.exports.webp = webp;
