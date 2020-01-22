/**
 *	Here you can manage your build process.
 */

const root = {
	src: "",
	public: "",
	build: "",
	baseUrl: "",
	assetsDirName: "",
};

const browserSync = {
	proxy: "",
};

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
