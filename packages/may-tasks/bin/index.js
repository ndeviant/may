#!/usr/bin/env node

const spawn = require("cross-spawn");
const path = require("path");

const gulpfile = path.resolve(__dirname, '../', 'gulpfile.js');
const cwd = process.cwd();

const args = process.argv.slice(2);

spawn.sync(
	"gulp",
	[
		"--gulpfile",
		gulpfile,
		"--cwd",
		cwd,
		...args,
	],
	{ stdio: "inherit" },
);
