import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import 'whatwg-fetch' //fetch,ajax时候用
import { AppContainer } from 'react-hot-loader';

import './css/base.css'

import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp,
  window.devToolsExtension ? window.devToolsExtension() : undefined);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App /> 
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const RootContainer = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <RootContainer /> 
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
