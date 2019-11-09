// @remove-file-on-eject

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
	throw err;
});

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const chalk = require("chalk");
const inquirer = require("inquirer");
const spawnSync = require("cross-spawn").sync;
const os = require("os");

const { green } = chalk;
const { cyan } = chalk;

const paths = {
	appPath: fs.realpathSync(process.cwd()),
	ownPath: path.resolve(__dirname, "../."),
};

paths.yarnLockFile = path.resolve(paths.appPath, "./yarn.lock");

function getGitStatus() {
	try {
		const stdout = execSync(`git status --porcelain`, {
			stdio: ["pipe", "pipe", "ignore"],
		}).toString();
		return stdout.trim();
	} catch (e) {
		return "";
	}
}

function tryGitAdd(appPath) {
	try {
		spawnSync(
			"git",
			["add", path.join(appPath, "config"), path.join(appPath, ".")],
			{
				stdio: "inherit",
			},
		);

		return true;
	} catch (e) {
		return false;
	}
}

inquirer
	.prompt({
		type: "confirm",
		name: "shouldEject",
		message: "Are you sure you want to eject? This action is permanent.",
		default: false,
	})
	.then(answer => {
		if (!answer.shouldEject) {
			console.log(cyan("Close one! Eject aborted."));
			return;
		}

		const gitStatus = getGitStatus();
		if (gitStatus) {
			console.error(
				`${chalk.red(
					"This git repository has untracked files or uncommitted changes:",
				)}\n\n${gitStatus
					.split("\n")
					.map(line => line.match(/ .*/g)[0].trim())
					.join("\n")}\n\n${chalk.red(
					"Remove untracked files, stash or commit any changes, and try again.",
				)}`,
			);
			process.exit(1);
		}

		console.log("Ejecting...");

		const { ownPath, appPath } = paths;

		const folder = "root";

		function getNewFilePath(file) {
			const filepath = file
				.replace(ownPath, appPath)
				.replace(new RegExp(`(\\\\|\\/|\\\\\\\\)${folder}`, "g"), "");

			return filepath;
		}

		function verifyAbsent(file) {
			const filepath = getNewFilePath(file);

			if (fs.existsSync(filepath)) {
				console.error(
					`\`${filepath}\` already exists in your app folder. We cannot ` +
						"continue as you would lose all the changes in that file or directory. " +
						"Please move or delete it (maybe make a copy for backup) and run this " +
						"command again.",
				);
				process.exit(1);
			}
		}

		// Make shallow array of files paths
		const files = fs
			.readdirSync(path.join(ownPath, folder))
			// set full path
			.map(file => path.join(ownPath, folder, file))
			// omit dirs from file list
			.filter(file => fs.lstatSync(file).isFile());

		// Ensure that the app folder is clean and we won't override any files
		files.forEach(verifyAbsent);

		console.log();
		console.log(cyan(`Copying files into ${appPath}`));

		files.forEach(file => {
			let content = fs.readFileSync(file, "utf8");

			// Skip flagged files
			if (content.match(/\/\/ @remove-file-on-eject/)) {
				return;
			}
			content = `${content
				// Remove dead code from .js files on eject
				.replace(
					/\/\/ @remove-on-eject-begin([\s\S]*?)\/\/ @remove-on-eject-end/gm,
					"",
				)
				// Remove dead code from .applescript files on eject
				.replace(
					/-- @remove-on-eject-begin([\s\S]*?)-- @remove-on-eject-end/gm,
					"",
				)
				.trim()}\n`;
			console.log(`  Adding ${cyan(file.replace(ownPath, ""))} to the project`);
			fs.writeFileSync(getNewFilePath(file), content);
		});
		console.log();

		const ownPackage = require(path.join(ownPath, "package.json"));
		const appPackage = require(path.join(appPath, "package.json"));

		console.log(cyan("Updating the dependencies"));
		const ownPackageName = ownPackage.name;
		if (appPackage.devDependencies) {
			// If user moved may-tasks to devDependencies
			if (appPackage.devDependencies[ownPackageName]) {
				console.log(`  Removing ${cyan(ownPackageName)} from devDependencies`);
				delete appPackage.devDependencies[ownPackageName];
			}
		}
		appPackage.dependencies = appPackage.dependencies || {};
		if (appPackage.dependencies[ownPackageName]) {
			console.log(`  Removing ${cyan(ownPackageName)} from dependencies`);
			delete appPackage.dependencies[ownPackageName];
		}
		Object.keys(ownPackage.dependencies).forEach(key => {
			// For some reason optionalDependencies end up in dependencies after install
			if (
				ownPackage.optionalDependencies &&
				ownPackage.optionalDependencies[key]
			) {
				return;
			}
			console.log(`  Adding ${cyan(key)} to dependencies`);
			appPackage.dependencies[key] = ownPackage.dependencies[key];
		});
		// Sort the deps
		const unsortedDependencies = appPackage.dependencies;
		appPackage.dependencies = {};
		Object.keys(unsortedDependencies)
			.sort()
			.forEach(key => {
				appPackage.dependencies[key] = unsortedDependencies[key];
			});
		console.log();

		console.log(cyan("Updating the scripts"));
		delete appPackage.scripts.eject;
		Object.keys(appPackage.scripts).forEach(key => {
			const regex = new RegExp(`${ownPackage.name}`, "g");
			if (!regex.test(appPackage.scripts[key])) {
				return;
			}
			appPackage.scripts[key] = appPackage.scripts[key].replace(regex, "gulp");
			console.log(
				`  Replacing ${cyan(`"${ownPackage.name} ${key}"`)} with ${cyan(
					`"gulp ${key}"`,
				)}`,
			);
		});

		console.log();
		console.log(cyan("Configuring package.json"));

		fs.writeFileSync(
			path.join(appPath, "package.json"),
			JSON.stringify(appPackage, null, 2) + os.EOL,
		);
		console.log();

		// "Don't destroy what isn't ours"
		if (ownPath.indexOf(appPath) === 0) {
			try {
				// remove may-tasks and may-tasks binaries from app node_modules
				Object.keys(ownPackage.bin).forEach(binKey => {
					fs.removeSync(path.join(appPath, "node_modules", ".bin", binKey));
				});
				fs.removeSync(ownPath);
			} catch (e) {
				// It's not essential that this succeeds
			}
		}

		if (fs.existsSync(paths.yarnLockFile)) {
			const windowsCmdFilePath = path.join(
				appPath,
				"node_modules",
				".bin",
				"react-scripts.cmd",
			);
			let windowsCmdFileContent;
			if (process.platform === "win32") {
				// https://github.com/facebook/create-react-app/pull/3806#issuecomment-357781035
				// Yarn is diligent about cleaning up after itself, but this causes the react-scripts.cmd file
				// to be deleted while it is running. This trips Windows up after the eject completes.
				// We'll read the batch file and later "write it back" to match npm behavior.
				try {
					windowsCmdFileContent = fs.readFileSync(windowsCmdFilePath);
				} catch (err) {
					// If this fails we're not worse off than if we didn't try to fix it.
				}
			}

			console.log(cyan("Running yarn..."));
			spawnSync("yarnpkg", ["--cwd", process.cwd()], { stdio: "inherit" });

			if (windowsCmdFileContent && !fs.existsSync(windowsCmdFilePath)) {
				try {
					fs.writeFileSync(windowsCmdFilePath, windowsCmdFileContent);
				} catch (err) {
					// If this fails we're not worse off than if we didn't try to fix it.
				}
			}
		} else {
			console.log(cyan("Running npm install..."));
			spawnSync("npm", ["install", "--loglevel", "error"], {
				stdio: "inherit",
			});
		}
		console.log(green("Ejected successfully!"));
		console.log();

		if (tryGitAdd(appPath)) {
			console.log(cyan("Staged ejected files for commit."));
			console.log();
		}
	});
