const path = require("path");

const gulp = require("gulp");
const replace = require("gulp-replace");
const twig = require("gulp-twig");
const gulpif = require("gulp-if");
const browsersync = require("browser-sync");

const { plumbed } = require("./helpers/plumbed");
const { config } = require("./helpers/gulp.config");
const { isProduction } = require("./helpers/isProduction");
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
		.pipe(gulpif(isProduction(), replace("main.css", "main.min.css")))
		.pipe(gulpif(isProduction(), replace("vendor.js", "vendor.min.js")))
		.pipe(gulpif(isProduction(), replace("main.js", "main.min.js")))
		.pipe(gulp.dest(config.tasks.views.dist))
		.on("end", browsersync.reload);

module.exports.views = views;
