#!/usr/bin/env node

const spawn = require("cross-spawn");
const path = require("path");
const findUp = require("find-up");

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
(async () => {
	const nodeModulesDir = await findUp("node_modules", {
		type: "directory",
		cwd: __dirname,
	});

	const gulpbin = path.resolve(nodeModulesDir, ".bin/gulp");

	const gulpfile = path.resolve(__dirname, "../root/", "gulpfile.js");
	const cwd = process.cwd();

	setEnvByTask(args[0]);

	spawn.sync(gulpbin, ["--gulpfile", gulpfile, "--cwd", cwd, ...args], {
		stdio: "inherit",
	});
})();
