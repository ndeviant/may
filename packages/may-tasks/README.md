![may-starter](https://i.imgur.com/hr5WwqN.png)

![Version](https://img.shields.io/github/package-json/v/ndeviant/may?style=for-the-badge)
![Activity](https://img.shields.io/github/last-commit/ndeviant/may?style=for-the-badge)
![Dependencies](https://img.shields.io/david/ndeviant/may?path=packages%2Fmay-tasks&style=for-the-badge)

![License](https://img.shields.io/github/license/ndeviant/may?style=for-the-badge)
![Eslint](https://img.shields.io/github/package-json/dependency-version/ndeviant/may/dev/eslint?style=for-the-badge)
![Prettier](https://img.shields.io/github/package-json/dependency-version/ndeviant/may/dev/prettier?color=%232DD&style=for-the-badge)
![Stylelint](https://img.shields.io/github/package-json/dependency-version/ndeviant/may/dev/stylelint?color=%23D2D&style=for-the-badge)

# May Starter

> `create-react-app` without react.

## Features

- build is designed to automate tasks in everyday front-end development
- using the template engine [twig](https://twig.symfony.com/)
- using the preprocessor [SCSS](https://sass-lang.com/)
- using the bootstrap grid [Bootstrap](https://getbootstrap.com/)
- using the transpiler [Babel](https://babeljs.io/) to support modern JavaScript (ES6) in browsers
- using the bundler [Webpack](https://webpack.js.org/) to build JavaScript modules

## Installation

```sh
npx create-may-app my-app
cd my-app
npm start
```

Get Started Immediately
You don’t need to install or configure tools like Gulp, Webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

If you did everything right, browser with a local server should be opened.
The build mode implies project optimization: image compression, autoprefixing of CSS, minification of CSS and JS files for uploading to the server.

## File structure

```
may-starter
├── build
├── public
│   ├── fonts
│   ├── media
│   ├── images
│   │   ├── favicons
│   │   └── sprite.svg
│   └── .htaccess
├── src
│   ├── images
│   │   ├── favicon.{image type}
│   │   └── svg
│   ├── js
│   ├── scss
│   └── views
│       └── data.js
├── may.config.js
├── package.json
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
└── .stylelintrc.js
```

- Root folder:
  - `.eslintrc.js` — configure ESLint
  - `.prettierrc.js` — configure Prettier
  - `.stylelintrc.js` — configure Stylelint
  - `.gitignore` – a ban on tracking files Git
  - `may.config.js` — Gulp tasks settings
- Folder `public` - Define files to be moved at the root of build folder (e.g. .htaccess).
  - fonts: `public/assets/fonts`
  - media files, wich will be deleted, after landing on backend: `public/assets/media`
  - images: `public/assets/images`
    - favicons, generated from `src/images/favicon.{img}`: `public/assets/images/favicons`
    - svg sprite, generated from `src/images/svg/**/*.{svg}`: `public/assets/images/sprite.svg`
  - Apache web server configuration file with settings [gzip](https://habr.com/ru/post/221849/) (lossless compression): `public/.htaccess`
- Folder `src` - used during development:
  - images: `src/images`
    - favicon, generates from `src/images/favicon.{img}`, to `public/assets/images/favicons`
    - svg sprite, generates from `src/images/svg/**/*.{svg}`, to `public/assets/images/sprite.svg`
    - all other images are moving to build folder, which are optimized if using `build` task
  - JS files: `src/js`
  - SCSS files: `src/styles`
  - Twig files: `src/views`
    - Site pages: `src/views/pages`
    - Data for templates – `src/views/data.js`
- Folder `build` folder from which you run a local server for development purposes (when you run `npm run start`), or contains optimized files after `npm run build` command.

## Usage guidelines

- stick to the original folder and file structure
- stick component approach to the development of sites
  - SCSS-file of a component is imported to `src/styles/main.scss` file, JS-file is imported to `src/js/main.js`
- from all SCSS files, only `main.scss` is compiled. Other style files are imported into it
- pages located in the folder `src/views/pages`
  - each page (including the main page) inherits the `src/views/layouts/default.htm` template
  - main page: `src/views/pages/index.htm`
  - all pages should be at the root of `pages` directory: `src/views/pages/blog/index.htm` – not allowed
- fonts are in `public/assets/fonts` folder, use `ttf`, `woff` and `woof2` formats
- images are in the folder `src/images`
  - the image for generating favicons should be `src/images/favicon.[your extension]`, and have a size of at least `100px x 100px`. Favicons will be generated to `public/assets/images/favicons`, for better performance better to disable `favs` task, after you generated your favicons.
  - icons from `src/images/svg` folder are collected in one svg sprite at `public/assets/images/sprite.svg`.
  - pictures that are not part of the design, and will later be loaded from the CMS put in the folder `src/media`. Ex: post images, product pictures.
- all third-party libraries are installing in the `node_modules` folder
  - to install another, use `npm install [package_name]` command
  - to connect library JS files, import them into JS file, for example: `javascript import $ from "jquery";`
  - to connect library style files, import them into the `src/scss/vendor/[lib name].scss` (which in turn is imported into a file `src/styles/main.scss`)
- only `main` CSS and JS files are included in the layout.

## Svg sprite

The build collects all svgs from the `src/images/svg` folder into a single sprite that can be used with the `use` tag. Polyfil were added to support the syntax `<use xlink:href="./assets/images/sprite.svg#svg-logo">` on ie11, for easy use, and proper caching. The Id for svg is `svg-[file name]`. Detailed information on the use of [here](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

## Favicon

In the starter included auto-generation of favicons. By default, the task generates favicons to `public/assets/images/favicons` folder. This task takes a lot of time, so its recommended to turn it off in configuration file by setting it to `run: false`, after you've already created a favicons for the first time. Or just create them once with the `may-tasks favs` command (you should add this field to package.json to make it work, e.g. `'favs': 'may-tasks favs'`, `npm run favs`).

## WebP 

Webp support is included in the starter. WebP is a graphics format developed by Google in 2010. It was created as an alternative to PNG and JPG and differs from them in much smaller size with the same image quality. Detailed information on the use of [here](https://vk.com/@vk_it-webp).

## CMS

Starter kit, is designed for CMS landing. Media folder for images, not to mix design images and images wich will be uploaded dynamically. Html is already splitted into chunks. Added couple of filter's to twig to land the frontend to the backend with pleasure:

- `theme`: Use `theme` to specify path's for theme assets. Ex: `{{ "assets/images/sprite.svg#svg-logo" | theme }}`.
- `media`: Use `media` to specify path's for media files. Reffers to the `build/media` folder by default, so you shouldn't write a full path. Ex: `{{ "post1.jpg" | media }}`.
- `page`: Just set the name of html page, without extension, to create a link to it. Ex: `href="{{ "blog" | page }}"`.

You may simply not use these filters, but I would recommend you to. Also, these filters were "mocked" from OctoberCMS, so this will increase the speed of your development for it. But they are also useful for any other backend, because these paths are always dynamic, and you can simply search for those filters through files and change them according to your needs.

## IDE configuration

It's recommended to configure your IDE with defined linting rules. Example for VS code: [here](https://www.freecodecamp.org/news/integrating-prettier-with-eslint-and-stylelint-99e74fede33f/).

## Contacts

- VK: [@ndeviant](https://vk.com/ndeviant)
- Telegram: [@ndeviant](https://t-do.ru/ndeviant)
