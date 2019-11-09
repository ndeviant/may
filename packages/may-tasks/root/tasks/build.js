const gulp = require("gulp");

const { publicAssets } = require("./publicAssets");
const { cleanFiles } = require("./cleanFiles");
const { favs } = require("./favs");
const { images } = require("./images");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { svg } = require("./svg");
const { views } = require("./views");
const { webp } = require("./webp");

const { config } = require("./helpers/gulp.config");

const { tasks } = config;

const activeTasks = [
	tasks.cleanFiles.run ? cleanFiles : false,
	publicAssets,
	tasks.views.run ? views : false,
	tasks.styles.run ? styles : false,
	tasks.scripts.run ? scripts : false,
	tasks.favs.run ? favs : false,
	tasks.images.run ? images : false,
	tasks.webp.run ? webp : false,
	tasks.svg.run ? svg : false,
].filter(Boolean);

const build = gulp.series(...activeTasks);

module.exports.build = build;
