import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../../components/hello/hello.jsx';

window.onload = function(){
  ReactDOM.render(<Hello />, document.getElementById('app'));
}
