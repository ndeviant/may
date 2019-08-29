const gulp = require("gulp"); 
const clean = require("gulp-clean"); 
const rename = require("gulp-rename"); 
const { argv } = require("yargs");

const { plumbed } = require("./plumbed"); 
const { config } = require("./gulp.config"); 

const { from, to } = argv;

const changeExt = () =>
	gulp
		.src(`${config.root.src}/**/*.${from}`)
		.pipe(plumbed("Change extension"))
		.pipe(clean())
		.pipe(
			rename(path => {
				// eslint-disable-next-line no-param-reassign
				path.extname = `.${to}`;
			}),
		)
		.pipe(gulp.dest(`${config.root.src}/`));

module.exports.changeExt = changeExt;
