const isProduction =
	process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging";

function moduleExists(path) {
	try {
		require.resolve(path);
		return true;
	} catch (e) {
		return false;
	}
}

const resolveFunction = (userOption, defaultOption) => {
	if (!userOption || typeof userOption !== "function") {
		return userOption;
	}
	return userOption(defaultOption, isProduction);
};

module.exports = {
	isProduction,
	moduleExists,
	resolveFunction,
};
