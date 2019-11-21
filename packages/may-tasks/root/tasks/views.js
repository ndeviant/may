/* eslint-disable global-require, import/no-dynamic-require */
/* eslint-disable  */
const path = require("path");

const gulp = require("gulp");

const { plugins } = require("./helpers/plugins");
const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");
const { filters } = require("./helpers/octoberFilters");
const { moduleExists } = require("./helpers/utils");

const dataPath = path.resolve(config.tasks.views.src, "../../data.js");

const views = () =>
	gulp
		.src(config.tasks.views.src)
		.pipe(plumbed("Views"))
		.pipe(
			plugins.data(() => {
				delete require.cache[dataPath];
				return moduleExists(dataPath) && require(dataPath);
			}),
		)
		.pipe(
			plugins.twig({
				base: `${config.root.src}/views/`,
				filters,
			}),
		)
		.pipe(gulp.dest(config.tasks.views.build))
		.on("end", plugins.browserSync.reload);

module.exports.views = views;
