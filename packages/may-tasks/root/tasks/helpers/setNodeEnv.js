const setNodeEnv = prod => cb => {
	const mode = prod ? "production" : "development";

	process.env.BABEL_ENV = mode;
	process.env.NODE_ENV = mode;

	return cb();
};

module.exports.setNodeEnv = setNodeEnv;
