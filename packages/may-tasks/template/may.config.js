/**
 *	Here you can manage your build process.
 */

const root = {};

const browserSync = {};

const tasks = {
	cleanFiles: {},
	views: {},
	styles: {},
	scripts: {},
	images: {},
	webp: {},
	favs: {
		run: false,
	},
	svg: {},
};

const options = {
	root,
	browserSync,
	tasks,
};

module.exports = options;
