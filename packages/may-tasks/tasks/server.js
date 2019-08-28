import gulp from "gulp";
import browsersync from "browser-sync";

import { favs } from "./favs";
import { images } from "./images";
import { scripts } from "./scripts";
import { styles } from "./styles";
import { svg } from "./svg";
import { views } from "./views";
import { webp } from "./webp";
import { assets } from "./assets";

import { config } from "./helpers/gulp.config";

const { bsyncConfig, tasks } = config;

const server = () => {
	browsersync.init(bsyncConfig);

	if (tasks.views.run) {
		gulp.watch(tasks.views.watch, views);
	}

	if (tasks.styles.run) {
		gulp.watch(tasks.styles.watch, styles);
	}

	if (tasks.scripts.run) {
		gulp.watch(tasks.scripts.watch, scripts);
	}

	if (tasks.images.run) {
		gulp.watch(tasks.images.watch, images);
	}

	if (tasks.webp.run) {
		gulp.watch(tasks.webp.watch, webp);
	}

	if (tasks.favs.run) {
		gulp.watch(tasks.favs.watch, favs);
	}

	if (tasks.svg.run) {
		gulp.watch(tasks.svg.watch, svg);
	}

	if (tasks.assets.run) {
		gulp.watch(tasks.assets.watch, assets);
	}
};

export { server };
