import React from 'react';
import ReactDOM from 'react-dom';
import C01start from './komponenten/C01start.js';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Provider store={store}><C01start/></Provider></BrowserRouter>, document.getElementById('mount'));