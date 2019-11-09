const path = require("path");
const merge = require("lodash.merge");

const { moduleExists, resolveFunction } = require("./utils");

const cwd = process.cwd();
const configPath = path.resolve(cwd, "may.config.js");

const userOptions = merge(
	{ root: {}, browserSync: {}, tasks: {} },
	moduleExists(configPath)
		? require(configPath) // eslint-disable-line import/no-dynamic-require
		: {},
);

/**
 * Root paths:
 * Default root path's
 */
const root = {
	src: userOptions.root.src || "./src",
	public: userOptions.root.public || "./public",
	build: userOptions.root.build || "./build",
	assets: "",
};

root.assets = userOptions.root.assets || `${root.build}/assets`;

/**
 * Bsync config:
 * Disables online, unless tunnel is on, for better performance;
 */

const bsyncConfig = {
	server: root.build,
	notify: false,
	online: !!userOptions.browserSync.tunnel,
	middleware: [],
	...userOptions.browserSync,
};

/**
 * Tasks config:
 * Default configs for tasks. Has default `run: true`, on each.
 * Has `src, build, watch` fields. Watch is often reffering to src.
 */

/**
 * Public assets
 */

const publicAssets = {
	src: `${root.public}/**/*`,
	build: root.build,
	run: true,
};

publicAssets.watch = publicAssets.src;

/**
 *  Clean files
 */

let cleanFiles = {
	src: [`${root.build}/*.{html, htaccess}`, `${root.assets}/*`],
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
	build: root.build,
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
	src: `${root.src}/scss/*.scss`,
	build: `${root.assets}/css/`,
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
	src: `${root.src}/js/main.js`,
	build: `${root.assets}/js/`,
	watch: `${root.src}/js/**/*.js`,
	run: true,
};

scripts = {
	...scripts,
	...resolveFunction(userOptions.tasks.scripts, scripts),
};

/**
 * WebP
 */

let webp = {
	src: `${root.src}/images/**/*_webp.{jpg,jpeg,png}`,
	build: `${root.assets}/images/`,
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
	build: `${root.src}/images/favicons/`,
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
	build: `${root.src}/images/`,
	run: true,
};

svg.watch = svg.src;

svg = {
	...svg,
	...resolveFunction(userOptions.tasks.svg, svg),
};

/**
 * Images
 */

let images = {
	src: [
		`${root.src}/images/**/*.{jpg,jpeg,png,gif,svg,ico}`,
		`!${svg.src}`,
		`!${favs.src}`,
	],
	build: `${root.assets}/images/`,
	run: true,
};

images.watch = images.src;

images = {
	...images,
	...resolveFunction(userOptions.tasks.images, images),
};

/**
 * All tasks
 */

const tasks = {
	publicAssets,
	cleanFiles,
	views,
	styles,
	scripts,
	images,
	webp,
	favs,
	svg,
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
