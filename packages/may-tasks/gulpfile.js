// Helper tasks
module.exports.changeExt = require("./tasks/helpers/changeExt").changeExt;

// Build tasks
module.exports.cleanFiles = require("./tasks/cleanFiles").cleanFiles;
module.exports.favs = require("./tasks/favs").favs;
module.exports.htaccess = require("./tasks/htaccess").htaccess;
module.exports.images = require("./tasks/images").images;
module.exports.scripts = require("./tasks/scripts").scripts;
module.exports.styles = require("./tasks/styles").styles;
module.exports.svg = require("./tasks/svg").svg;
module.exports.views = require("./tasks/views").views;
module.exports.webp = require("./tasks/webp").webp;
module.exports.assets = require("./tasks/assets").assets;

// Higher level tasks
module.exports.server = require("./tasks/server").server;
module.exports.build = require("./tasks/build").build;
module.exports.develop = require("./tasks/develop").develop;
