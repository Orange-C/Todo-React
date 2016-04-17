import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import 'whatwg-fetch' //fetch,ajax时候用

import './css/base.css'

import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp,
  window.devToolsExtension ? window.devToolsExtension() : undefined);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);