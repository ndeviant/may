const DEVELOPMENT = "development";
const PRODUCTION = "production";
const TEST = "test";

const envs = {
	start: DEVELOPMENT,
	build: PRODUCTION,
	test: TEST,
};

module.exports.setEnv = env => {
	process.env.BABEL_ENV = env;
	process.env.NODE_ENV = env;
};

module.exports.setEnvByTask = task => {
	process.env.BABEL_ENV = envs[task];
	process.env.NODE_ENV = envs[task];
};
