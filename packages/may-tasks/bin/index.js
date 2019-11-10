#!/usr/bin/env node

const spawn = require("cross-spawn");
const path = require("path");

const { setEnvByTask } = require("../helpers/setEnv");
const { runFileScript } = require("../helpers/runFileScript");

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
	throw err;
});

const args = process.argv.slice(2);

// Run file script
const isFileScript = runFileScript({ args });
if (isFileScript) return;

// Run gulp task
const gulpbin = path.resolve(__dirname, "../node_modules/.bin/gulp");
const gulpfile = path.resolve(__dirname, "../root/", "gulpfile.js");
const cwd = process.cwd();

setEnvByTask(args[0]);

spawn.sync(gulpbin, ["--gulpfile", gulpfile, "--cwd", cwd, ...args], {
	stdio: "inherit",
});
