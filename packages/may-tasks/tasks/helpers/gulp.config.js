const { resolveFunction } = require("./resolveFunction");

const userOptions = require("../../may.config");

/**
 * Root paths:
 * Default root path's
 */
const root = {
	src: userOptions.root.src || "./src",
	dist: userOptions.root.dist || "./dist",
	assets: "",
};

root.assets = userOptions.root.assets || `${root.dist}/assets`;

/**
 * Bsync config:
 * Disables online, unless tunnel is on, for better performance;
 */

const bsyncConfig = {
	server: root.dist,
	notify: false,
	online: !!userOptions.browserSync.tunnel,
	middleware: [],
	...userOptions.browserSync,
};

/**
 * Tasks config:
 * Default configs for tasks. Has default `run: true`, on each.
 * Has `src, dist, watch` fields. Watch is often reffering to src.
 */

/**
 *  Clean files
 */

let cleanFiles = {
	src: [`${root.dist}/*.{html, htaccess}`, `${root.dist}/assets/*`],
	run: true,
};

cleanFiles = {
	...cleanFiles,
	...resolveFunction(userOptions.tasks.cleanFiles, cleanFiles),
};

/**
 * Views
 */

let views = {
	src: `${root.src}/views/pages/*.htm`,
	dist: root.dist,
	watch: `${root.src}/views/**/*.htm`,
	run: true,
};

views = {
	...views,
	...resolveFunction(userOptions.tasks.views, views),
};

/**
 * Styles
 */

let styles = {
	src: `${root.src}/scss/main.scss`,
	dist: `${root.assets}/css/`,
	watch: `${root.src}/scss/**/*.scss`,
	run: true,
};

styles = {
	...styles,
	...resolveFunction(userOptions.tasks.styles, styles),
};

/**
 * Scripts
 */

let scripts = {
	src: `${root.src}/js/index.js`,
	dist: `${root.assets}/js/`,
	watch: `${root.src}/js/**/*.js`,
	run: true,
};

scripts = {
	...scripts,
	...resolveFunction(userOptions.tasks.scripts, scripts),
};

/**
 * Images
 */

let images = {
	src: [
		`${root.src}/images/**/*.{jpg,jpeg,png,gif,svg}`,
		`!${root.src}/images/svg/**/*.svg`,
		`!${root.src}/images/favicon.{jpg,jpeg,png,gif,svg}`,
	],
	dist: `${root.dist}/assets/images/`,
	run: true,
};

images.watch = images.src;

images = {
	...images,
	...resolveFunction(userOptions.tasks.images, images),
};

/**
 * WebP
 */

let webp = {
	src: `${root.src}/images/**/*_webp.{jpg,jpeg,png}`,
	dist: `${root.assets}/images/`,
	run: true,
};

webp.watch = webp.src;

webp = {
	...webp,
	...resolveFunction(userOptions.tasks.webp, webp),
};

/**
 * Favs
 */

let favs = {
	src: `${root.src}/images/favicon.{jpg,jpeg,png,gif,svg}`,
	dist: `${root.src}/images/favicons/`,
	run: true,
};

favs.watch = favs.src;

favs = {
	...favs,
	...resolveFunction(userOptions.tasks.favs, favs),
};

/**
 * Svg
 */

let svg = {
	src: `${root.src}/images/svg/**/*.svg`,
	dist: `${root.src}/images/`,
	run: true,
};

svg.watch = svg.src;

svg = {
	...svg,
	...resolveFunction(userOptions.tasks.svg, svg),
};

/**
 * Other assets
 */

let assets = {
	src: [
		`${root.src}/**/*`,
		`!${root.src}/views`,
		`!${root.src}/views/**/*`,
		`!${root.src}/scss`,
		`!${root.src}/scss/**/*`,
		`!${root.src}/js`,
		`!${root.src}/js/**/*`,
		`!${root.src}/images`,
		`!${root.src}/images/**/*`,
		`!${root.src}/.htaccess`,
	],
	dist: root.assets,
	run: true,
};

assets.watch = assets.src;

assets = {
	...assets,
	...resolveFunction(userOptions.tasks.assets, assets),
};

/**
 * Htaccess
 */

let htaccess = {
	src: `${root.src}/.htaccess`,
	dist: root.dist,
	run: true,
};

htaccess = {
	...htaccess,
	...resolveFunction(userOptions.tasks.htaccess, htaccess),
};

/**
 * All tasks
 */

const tasks = {
	cleanFiles,
	views,
	styles,
	scripts,
	images,
	webp,
	favs,
	svg,
	assets,
	htaccess,
};

/**
 * Result config
 */

const config = {
	root,
	bsyncConfig,
	tasks,
};

module.exports.config = config;
