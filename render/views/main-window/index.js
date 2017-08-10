import React            from 'react';
import ReactDOM         from 'react-dom';
import MainView         from './main.jsx';
import { Provider }     from 'react-redux';
import {
  applyMiddleware,
  compose }             from 'redux';
import { createRendererStore } from 'redux-electron';

let middlewares = [];

let enhancer = compose(
  applyMiddleware(...middlewares)
);

const store = createRendererStore(enhancer);

window.onload = function(){
  ReactDOM.render(
    <Provider store={store}>
      <MainView/>
    </Provider>,
    document.getElementById('app')
  );
}
