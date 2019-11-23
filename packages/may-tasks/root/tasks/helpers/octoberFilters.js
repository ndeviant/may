const path = require("path");
const fs = require("fs");
const { config } = require("./gulp.config");

const { baseUrl } = config.root;
const { src } = config.tasks.views;

const pagesDir = path.join(src, "../..");

const pathJoin = (...args) => {
	return path.join(...args).replace(/\\/g, "/");
};

const filters = [
	{
		name: "media",
		func: value => {
			return pathJoin(baseUrl, `media`, value);
		},
	},
	{
		name: "theme",
		func: value => {
			return pathJoin(baseUrl, value);
		},
	},
	{
		name: "page",
		func: value => {
			if (!value) return baseUrl;

			const htmExists = fs.existsSync(path.join(pagesDir, `${value}.htm`));

			if (htmExists) {
				return pathJoin(baseUrl, `${value}.html`);
			}

			return pathJoin(baseUrl, value);
		},
	},
];

module.exports.filters = filters;
