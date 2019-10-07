/**
 *	Here you can manage your build process.
 */

const root = {};

const browserSync = {};

const tasks = {
	cleanFiles: {},
	htaccess: {},
	views: {},
	styles: {},
	scripts: {},
	images: {},
	webp: {},
	favs: {
		run: false,
	},
	svg: {},
	assets: {},
};

const options = {
	root,
	browserSync,
	tasks,
};

module.exports = options;
