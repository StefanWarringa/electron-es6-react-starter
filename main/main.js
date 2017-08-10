import { app, BrowserWindow } from 'electron';
import appState               from 'reducers';
import { applyMiddleware, compose } from 'redux';
import { createMainStore } from 'redux-electron';

let mainWindow = null;

let middlewares = [];

let enhancer = compose(
  applyMiddleware(...middlewares)
);

const store = createMainStore(appState, enhancer);

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/../render/views/main-window/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
