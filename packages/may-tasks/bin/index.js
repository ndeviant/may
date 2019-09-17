#!/usr/bin/env node

const spawn = require("cross-spawn");
const path = require("path");

const { setEnvByTask } = require("../helpers/setEnv");

const gulpfile = path.resolve(__dirname, "../root/", "gulpfile.js");
const cwd = process.cwd();

const args = process.argv.slice(2);

setEnvByTask(args[0]);

spawn.sync("gulp", ["--gulpfile", gulpfile, "--cwd", cwd, ...args], {
	stdio: "inherit",
});
