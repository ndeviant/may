const path = require("path");

const gulp = require("gulp");
const twig = require("gulp-twig");
const browsersync = require("browser-sync");

const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");
const { filters } = require("./helpers/octoberFilters");
const { moduleExists } = require("./helpers/moduleExists");

const cwd = process.cwd();
const configPath = path.resolve(cwd, "template.data.js");

// eslint-disable-next-line
const data = moduleExists(configPath) && require(configPath);

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
		.pipe(gulp.dest(config.tasks.views.dist))
		.on("end", browsersync.reload);

module.exports.views = views;
