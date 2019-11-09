const path = require("path");

const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");
const { filters } = require("./helpers/octoberFilters");
const { moduleExists } = require("./helpers/utils");

const configPath = path.resolve(config.tasks.views.src, "../../data.js");

// eslint-disable-next-line
const data = moduleExists(configPath) && require(configPath);

const views = () =>
	gulp
		.src(config.tasks.views.src)
		.pipe(plumbed("Views"))
		.pipe(
			plugins.twig({
				base: `${config.root.src}/views/`,
				data,
				filters,
			}),
		)
		.pipe(gulp.dest(config.tasks.views.build))
		.on("end", plugins.browserSync.reload);

module.exports.views = views;
