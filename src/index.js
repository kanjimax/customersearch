import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import C01start from './komponenten/C01start';
import store from './store/store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <C01start />
    </Provider>
  </BrowserRouter>,
  document.getElementById('mount')
);
