import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import C01start from './komponenten/C01start';
import store from './store/store';

ReactDOM.render(
  <HashRouter base="/">
    <Provider store={store}>
      <C01start />
    </Provider>
  </HashRouter>,
  document.getElementById('mount')
);
