// Build tasks
module.exports.cleanFiles = require("./tasks/cleanFiles").cleanFiles;
module.exports.publicAssets = require("./tasks/publicAssets").publicAssets;
module.exports.favs = require("./tasks/favs").favs;
module.exports.images = require("./tasks/images").images;
module.exports.scripts = require("./tasks/scripts").scripts;
module.exports.styles = require("./tasks/styles").styles;
module.exports.svg = require("./tasks/svg").svg;
module.exports.views = require("./tasks/views").views;
module.exports.webp = require("./tasks/webp").webp;

// Higher level tasks
module.exports.server = require("./tasks/server").server;
module.exports.build = require("./tasks/build").build;
module.exports.develop = require("./tasks/develop").develop;

module.exports.start = module.exports.develop;
