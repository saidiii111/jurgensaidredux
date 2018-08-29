import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

import { Provider } from 'react-redux';
import { reducer } from './modules/reducer';
// import Productlist from './components/Productlist';
import products from './products.json';


const store = createStore(reducer, {
  products: products.reduce((products, product) => ({
    ...products,
    [product.id]: product
  }), {}),
  cart: {}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store = {store}>
  <App />

</Provider>, document.getElementById('root'));
registerServiceWorker();
