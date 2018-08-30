import React from 'react';

import {connect} from 'react-redux';
import ProductList from './Productlist';
import {removeFromCart, removeAllFromCart} from '../modules/actions.js';

const Shoppingcart = (props) => {

  const {items, remove} = props;

  return (
    <ul>
       {items.map(product => (
         <li key={product.id}>
           <p> {product.title} | ${product.price} | x{product.inventory}
           </p>
           <button
            onClick={() => removeFromCart(product)}
          >Remove One</button>
          <button
            onClick={() => removeAllFromCart(product)}
          >Remove All</button>
         </li>
       ))}
     </ul>
  );
}

const mapStoreToProps = (store) => ({
  items: Object.values(store.cart)
})

const mapActionsToProps = {
remove: removeFromCart
}

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(Shoppingcart);
