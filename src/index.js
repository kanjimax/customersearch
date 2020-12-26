import React from 'react';
import ReactDOM from 'react-dom';
import C01 from './C01.js';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Provider store={store}><C01/></Provider></BrowserRouter>, document.getElementById('mount'));