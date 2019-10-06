const { plugins } = require("./plugins");

const plumbed = title =>
	plugins.plumber({
		errorHandler: plugins.notify.onError(() => ({
			title,
			message: "Error: <%= error.message %>",
			sound: "Glass",
		})),
	});

module.exports.plumbed = plumbed;
