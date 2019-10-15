const DEVELOPMENT = "development";
const PRODUCTION = "production";
const TEST = "test";

const envs = {
	start: DEVELOPMENT,
	build: PRODUCTION,
	test: TEST,
};

const setEnv = env => {
	process.env.BABEL_ENV = env;
	process.env.NODE_ENV = env;
};

module.exports.setEnv = setEnv;

module.exports.setEnvByTask = task => {
	setEnv(envs[task]);
};
