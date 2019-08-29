#!/usr/bin/env node

const spawn = require("cross-spawn");

const cwd = process.cwd();

const args = process.argv.slice(2);

console.log("process.cwd()", process.cwd());
console.log("process.argv", process.argv);

spawn.sync(
	"gulp",
	[
		"--gulpfile",
		"../../node_modules/may-tasks/gulpfile.js",
		"--cwd",
		cwd,
		...args,
	],
	{ stdio: "inherit" },
);
