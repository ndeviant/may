const isProduction = process.env.NODE_ENV === "production";

module.exports.isProduction = isProduction;

function moduleExists(path) {
	try {
		require.resolve(path);
		return true;
	} catch (e) {
		return false;
	}
}

module.exports.moduleExists = moduleExists;

const resolveFunction = (userOption, defaultOption) => {
	if (!userOption || typeof userOption !== "function") {
		return userOption;
	}
	return userOption(defaultOption, isProduction);
};

module.exports.resolveFunction = resolveFunction;
