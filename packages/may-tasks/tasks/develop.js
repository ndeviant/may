const gulp = require("gulp");

const { cleanFiles } = require("./cleanFiles");
const { favs } = require("./favs");
const { images } = require("./images");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { svg } = require("./svg");
const { views } = require("./views");
const { webp } = require("./webp");
const { assets } = require("./assets");
const { server } = require("./server");

const { setNodeEnv } = require("./helpers/setNodeEnv");
const { config } = require("./helpers/gulp.config");

const { tasks } = config;

const activeTasks = [
	tasks.views.run ? views : false,
	tasks.styles.run ? styles : false,
	tasks.scripts.run ? scripts : false,
	tasks.images.run ? images : false,
	tasks.webp.run ? webp : false,
	tasks.assets.run ? assets : false,
].filter(Boolean);

const additionalTasks = [
	tasks.favs.run ? favs : false,
	tasks.svg.run ? svg : false,
].filter(Boolean);

const develop = gulp.series(
	setNodeEnv(),
	cleanFiles,
	gulp.parallel(...activeTasks),
	gulp.parallel(server, ...additionalTasks),
);

module.exports.develop = develop;
