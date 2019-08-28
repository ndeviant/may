import path from "path";
import { config } from "./gulp.config";

const { dist, assets } = config.root;
const distAssets = assets.replace(dist, "");

const filters = [
	{
		name: "media",
		func: value => {
			return path.join("./", `${distAssets}/media`, value);
		},
	},
	{
		name: "theme",
		func: value => {
			return path.join("./", value);
		},
	},
	{
		name: "page",
		func: (value, args) => {
			if (!value) return "/";

			let addition = "";
			if (args) [addition] = args;

			return path.join("/", `${value}${addition}.html`);
		},
	},
];

export default filters;
