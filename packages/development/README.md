[![may-starter](https://i.imgur.com/hr5WwqN.png)](https://may-starter.gq/)

### [Demo: may-starter.gq](https://may-starter.gq/)
### [Example: may-example.gq](https://may-example.gq/)


![Version](https://img.shields.io/github/package-json/v/ndeviant/may?style=for-the-badge)
![Dependencies](https://img.shields.io/david/ndeviant/may?style=for-the-badge)
![Activity](https://img.shields.io/github/last-commit/ndeviant/may?style=for-the-badge)

![License](https://img.shields.io/github/license/ndeviant/may?style=for-the-badge)
![Eslint](https://img.shields.io/github/package-json/dependency-version/ndeviant/may/dev/eslint?style=for-the-badge)
![Prettier](https://img.shields.io/github/package-json/dependency-version/ndeviant/may/dev/prettier?color=%232DD&style=for-the-badge)
![Stylelint](https://img.shields.io/github/package-json/dependency-version/ndeviant/may/dev/stylelint?color=%23D2D&style=for-the-badge)

# May Starter

## Features

- build is designed to automate tasks in everyday front-end development
- naming classes according to [BEM](https://ru.bem.info/)
- using the template engine [twig](https://twig.symfony.com/)
- using the preprocessor [SCSS](https://sass-lang.com/)
- using the bootstrap grid [Bootstrap](https://getbootstrap.com/)
- using the transpiler [Babel](https://babeljs.io/) to support modern JavaScript (ES6) in browsers
- use [Webpack](https://webpack.js.org/) to build JavaScript modules

## Installation

- install [Yarn](https://yarnpkg.com/en/docs/install)

> Yarn is a modern alternative to npm. Yarn works with the same `package.json` file and also downloads the necessary modules to the `node_modules` folder, but does it much faster.

- download the build: `git clone https://github.com/ndeviant/may-starter.git`
- install`gulp` globally: `yarn global add gulp-cli`
- go to the downloaded folder with the build:`cd may-starter`
- download the necessary dependencies: `yarn`
- to get started, enter the command:`yarn start` (development mode)
- to build a project, enter the command `yarn build` (build mode)

If you did everything right , you should open a browser with a local server.
The build mode implies project optimization: image compression, minification of CSS and JS files for uploading to the server.

## File structure

```
may-starter
├── dist
├── src
│   ├── fonts
│   ├── images
│   │   ├── favicons
│   │   └── svg
│   ├── media
│   ├── js
│   ├── scss
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── may.config.js
├── webpack.config.babel.js
├── package.json
├── template.data.js
├── .babelrc.js
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
└── .stylelintrc.js
```

- Root folder:
  - `.babelrc.js` — es6 setup
  - `.eslintrc.js` — configure ESLint
  - `.prettierrc.js` — configure ESLint
  - `.stylelintrc.js` — configure Stylelint
  - `.gitignore` – a ban on tracking files Git
  - `gulpfile.babel.js` — gulp problems
  - `may.config.js` — Gulp settings
  - `template.data.js` — Data for templates
  - `webpack.config.js` — webpack `package settings.json` — list of dependencies
- Folder `src` - used during development:
  - fonts: `src/fonts`
  - images: `src/images`
    - favicons, generated from `src/images/favicon.{img}`: `src/images/favicons`
    - svg sprite, generated from `src/images/svg/**/*.{svg}`: `src/images/sprite.svg`
  - media files, wich will be deleted, after landing on CMS: `src/media`
  - JS files: `src/js`
  - SCSS files: `src/styles`
  - Twig files: `src/views`
  - site pages: `src/views/pages`
  - Apache web server configuration file with settings [gzip](https://habr.com/ru/post/221849/) (lossless compression): `src/.htaccess`
- Folder `dist` folder from which you run a local server for development purposes (when you run `yarn run dev`)

## Usage guidelines

- stick to the original folder and file structure
- stick component approach to the development of sites
  - one BEM block contains one Twig file, one SCSS file and one JS file (if the block uses a script)
  - SCSS-file of a block is imported to `src/styles/main.scss` file, JS-file is imported to `src/js/index.js`
- from all SCSS files, only `main.scss` is compiled. Other style files are imported into it
- pages located in the folder `src/pages`
  - each page (including the main page) inherits the `src/views/layouts/default.htm` template
  - main page: `src/views/pages/index.htm`
- fonts are in `src/fonts` folder, use `ttf`, `woff` and `woof2` formats
- images are in the folder `src/images`
  - the image for generating favicons should be in the `src/images/` folder and have a size of at least `100px x 100px`. Favicons will be generated to `src/images/favicons`, for better performance better to disable `favs` task, after you generated your favicons.
  - icons from `src/images/svg` folder are collected in one svg sprite at `src/images/sprite.svg`.
  - pictures that are not part of the design, and will later be loaded from the CMS put in the folder `src/media`. Ex: post images, product pictures.
- all third-party libraries are installing in the `node_modules` folder
  - to install another, use `yarn add [package_name]` command
  - to connect library JS files, import them into a BEM block JS file (that is, the BEM block that the script uses), for example:
    `javascript import $ from "jquery";` to connect library style files, import them into the `src/scss/vendor/[lib name].scss` (which in turn is imported into a file `src/styles/main.scss`)
- only minified CSS and JS files are included in the layout.

## Svg sprite

The build collects all svgs from the `src/images/svg` folder into a single sprite that can be used with the `use` tag. Polyfil were added to support the syntax `<use xlink:href="./assets/images/sprite.svg#svg-logo">` on ie11, for easy use, and proper caching. The Id for svg is `svg-[file name]`. Detailed information on the use of [here](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

## Favicon

In the starter included auto-generation of favicons. By default, the task generates favicons to `src/images/favicons` folder. This task takes a lot of time, so its recommended to turn it off in configuration file by setting it to `run: false`, after you've already created a favicons for the first time.

## WebP 

Webp support is included in the starter. WebP is a graphics format developed by Google in 2010. It was created as an alternative to PNG and JPG and differs from them in much smaller size with the same image quality. Detailed information on the use of [here](https://vk.com/@vk_it-webp).

## CMS

Starter kit, is designed for CMS landing. Media folder for images, not to mix design images and images wich will be uploaded dynamically. Html is already splitted into chunks. Added couple of filter's to twig to land the frontend to the backend with pleasure:

- `theme`: Use `theme` to specify path's for theme assets. Ex: `{{ "assets/images/sprite.svg#svg-logo" | theme }}`.
- `media`: Use `media` to specify path's for media files. Reffers to the `dist/media` folder by default, so you shouldn't write a full path. Ex: `{{ "post1.jpg" | media }}`.
- `page`: Just set the name of html page, without extension, to create a link to it. Ex: `href="{{ "blog" | page }}"`.

You may simply not use these filters, but I would recommend you to. Also, these filters were "mocked" from OctoberCMS, so this will increase the speed of your development for it. But they are also useful for any other backend, because these paths are always dynamic, and you can simply search for those filters through files and change them according to your needs.

## Contacts

- VK: [@ndeviant](https://vk.com/ndeviant)
- Telegram: [@ndeviant](https://t-do.ru/ndeviant)
