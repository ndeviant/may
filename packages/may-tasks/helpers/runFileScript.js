#!/usr/bin/env node
/* eslint-disable no-console */

const spawn = require("cross-spawn");

const availableScripts = ["init", "eject"];

module.exports.runFileScript = ({ args } = {}) => {
	const scriptIndex = args.findIndex(x => {
		return !!availableScripts.some(script => x === script);
	});
	const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
	const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

	if (!availableScripts.includes(script)) {
		return false;
	}

	const result = spawn.sync(
		"node",
		nodeArgs
			.concat(require.resolve(`../scripts/${script}`))
			.concat(args.slice(scriptIndex + 1)),
		{ stdio: "inherit" },
	);
	if (result.signal) {
		if (result.signal === "SIGKILL") {
			console.log(
				"The build failed because the process exited too early. " +
					"This probably means the system ran out of memory or someone called " +
					"`kill -9` on the process.",
			);
		} else if (result.signal === "SIGTERM") {
			console.log(
				"The build failed because the process exited too early. " +
					"Someone might have called `kill` or `killall`, or the system could " +
					"be shutting down.",
			);
		}
		process.exit(1);
	}
	process.exit(result.status);
};
