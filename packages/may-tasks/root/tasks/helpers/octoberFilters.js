const path = require("path");
const { config } = require("./gulp.config");

const { build, assets } = config.root;
const buildAssets = assets.replace(build, "");

const pathJoin = (...args) => {
	return path.join(...args).replace(/\\/g, "/");
};

const filters = [
	{
		name: "media",
		func: value => {
			return pathJoin("./", `${buildAssets}/media`, value);
		},
	},
	{
		name: "theme",
		func: value => {
			return pathJoin("./", value);
		},
	},
	{
		name: "page",
		func: (value, args) => {
			if (!value) return "/";

			let addition = "";
			if (args) [addition] = args;

			return pathJoin("/", `${value}${addition}.html`);
		},
	},
];

module.exports.filters = filters;
