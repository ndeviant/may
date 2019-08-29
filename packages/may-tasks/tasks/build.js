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
const { htaccess } = require("./htaccess");

const { setNodeEnv } = require("./helpers/setNodeEnv");
const { config } = require("./helpers/gulp.config");

const { tasks } = config;

const activeTasks = [
	setNodeEnv("production"),
	tasks.cleanFiles.run ? cleanFiles : false,
	tasks.htaccess.run ? htaccess : false,
	tasks.views.run ? views : false,
	tasks.styles.run ? styles : false,
	tasks.scripts.run ? scripts : false,
	tasks.favs.run ? favs : false,
	tasks.images.run ? images : false,
	tasks.webp.run ? webp : false,
	tasks.svg.run ? svg : false,
	tasks.assets.run ? assets : false,
].filter(Boolean);

const build = gulp.series(...activeTasks);

module.exports.build = build;
