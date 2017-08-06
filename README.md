# electron-es6-react-redux

A multi-lingual hello world app to demonstrate how to use [ES6], [React] and [Redux] with
[Electron].

This starter is based on [b52] and uses [Babel] to automatically transpile ES6 and JSX code, without depending on any package manager besides `npm`.

This starter project adds [redux] to the mix as well as some other nice features like easy module resolution using the [Babel module resolver] plugin which allows for easy refactoring of the application structure.

## Project structure

The project is structured as follows:

* main - contains code for the electron main process
* render - UI for electron renderer process
  * components
  * views
* store - redux application state container
 * reducers
 * actions

## Bootstrap

The Node and Electron binaries both take a parameter `-r` that automatically
requires a module before the rest of the code.  The `npm start` script is
modified using this, which registers Babel and loads the entry point `main/main.js`.

The main process will load the main window view located in renderer/views/main-window by loading its index.html.

The renderer entry point `index.html` does basically the same as `main.js` by registering Babel and  then bootstrapping react by loading the `index.js` file.

## Installation

```bash
git clone https://github.com/StefanWarringa/electron-es6-react-starter
cd electron-es6-react-starter
npm install
npm start
```

[ES6]: http://exploringjs.com/
[React]: https://facebook.github.io/react/
[Electron]: http://electron.atom.io/
[Babel]: http://babeljs.io
[Redux]: http://redux.js.org/
[b52]: http://github.com/b52/electron-es6-react
[Babel module resolver]: https://www.npmjs.com/package/babel-plugin-module-resolver
