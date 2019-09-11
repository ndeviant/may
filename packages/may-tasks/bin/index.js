#!/usr/bin/env node

const spawn = require("cross-spawn");
const path = require("path");

const gulpfile = path.resolve(__dirname, "../root/", "gulpfile.js");
const cwd = process.cwd();

console.log(cwd, path.resolve(cwd, "may.config.js"));

const args = process.argv.slice(2);

spawn.sync("gulp", ["--gulpfile", gulpfile, "--cwd", cwd, ...args], {
	stdio: "inherit",
});
