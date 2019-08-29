const notify = require("gulp-notify"); 
const plumber = require("gulp-plumber"); 

const plumbed = title =>
	plumber({
		errorHandler: notify.onError(() => ({
			title,
			message: "Error: <%= error.message %>",
			sound: "Glass",
		})),
	});

module.exports.plumbed = plumbed;
