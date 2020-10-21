
### Linting

We are using a modified version of AirBNB's eslint config for es6+ and React. Please refer to your editor's instructions for installing eslint with on-the-fly linting if you do not have it already.
Also `husky` and `lint-staged` will forbid you to commit code with linting errors.

## Preinstallation

1. Install nvm globally: https://github.com/nvm-sh/nvm
2. Install and setup direnv globally: https://github.com/direnv/direnv. For MacOs: `brew install direnv`.
3. Add hook into the shell of your terminal: https://github.com/direnv/direnv#bash
4. When direnv will ask for it, type `direnv allow`.

## Installation

Install dependencies from NPM
From project folder run:

    $ nvm install
    $ nvm use
    $ npm install

For development mode, run one command: `yarn dev`.

____________

#### Default README:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
