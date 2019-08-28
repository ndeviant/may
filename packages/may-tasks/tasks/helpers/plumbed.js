import notify from "gulp-notify";
import plumber from "gulp-plumber";

const plumbed = title =>
	plumber({
		errorHandler: notify.onError(() => ({
			title,
			message: "Error: <%= error.message %>",
			sound: "Glass",
		})),
	});

export { plumbed };
