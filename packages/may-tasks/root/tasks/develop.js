const gulp = require("gulp");

const { cleanFiles } = require("./cleanFiles");
const { publicAssets } = require("./publicAssets");
const { favs } = require("./favs");
const { images } = require("./images");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { svg } = require("./svg");
const { views } = require("./views");
const { webp } = require("./webp");
const { server } = require("./server");

const { config } = require("./helpers/gulp.config");

const { tasks } = config;

const activeTasks = [
	tasks.publicAssets.run ? publicAssets : false,
	tasks.views.run ? views : false,
	tasks.styles.run ? styles : false,
	tasks.scripts.run ? scripts : false,
	tasks.images.run ? images : false,
	tasks.webp.run ? webp : false,
].filter(Boolean);

const additionalTasks = [
	tasks.favs.run ? favs : false,
	tasks.svg.run ? svg : false,
].filter(Boolean);

const develop = gulp.series(
	cleanFiles,
	gulp.parallel(...activeTasks),
	gulp.parallel(server, ...additionalTasks),
);

module.exports.develop = develop;
