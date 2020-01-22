const url = require("url");
const path = require("path");
const fs = require("fs");
const { config } = require("./gulp.config");

const { baseUrl, assetsDirName } = config.root;
const { src } = config.tasks.views;

const pagesDir = path.join(src, "../..");

const filters = [
	{
		name: "media",
		func: value => {
			return url.resolve(baseUrl, assetsDirName, "media", value);
		},
	},
	{
		name: "theme",
		func: value => {
			return url.resolve(baseUrl, value);
		},
	},
	{
		name: "page",
		func: value => {
			if (!value) return baseUrl;

			const htmExists = fs.existsSync(path.join(pagesDir, `${value}.htm`));

			if (htmExists) {
				return url.resolve(baseUrl, `${value}.html`);
			}

			return url.resolve(baseUrl, value);
		},
	},
];

module.exports.filters = filters;
