import React            from 'react';
import ReactDOM         from 'react-dom';
import MainView         from './main.jsx';
import { Provider }     from 'react-redux';
import { createStore }  from 'redux';
import appState         from 'reducers';

let store = createStore(appState);

window.onload = function(){
  ReactDOM.render(
    <Provider store={store}>
      <MainView/>
    </Provider>,
    document.getElementById('app')
  );
}
