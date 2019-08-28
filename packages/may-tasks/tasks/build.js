import gulp from "gulp";

import { cleanFiles } from "./cleanFiles";
import { favs } from "./favs";
import { htaccess } from "./htaccess";
import { images } from "./images";
import { scripts } from "./scripts";
import { styles } from "./styles";
import { svg } from "./svg";
import { views } from "./views";
import { webp } from "./webp";
import { assets } from "./assets";
import { config } from "./helpers/gulp.config";

const { tasks } = config;

const activeTasks = [
	tasks.cleanFiles.run ? cleanFiles : false,
	tasks.htaccess.run ? htaccess : false,
	tasks.views.run ? views : false,
	tasks.styles.run ? styles : false,
	tasks.scripts.run ? scripts : false,
	tasks.favs.run ? favs : false,
	tasks.images.run ? images : false,
	tasks.webp.run ? webp : false,
	tasks.svg.run ? svg : false,
	tasks.assets.run ? assets : false,
].filter(Boolean);

const build = gulp.series(...activeTasks);

export { build };
