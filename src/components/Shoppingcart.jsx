import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import ProductList from './Productlist';
import {removeFromCart, removeAllFromCart} from '../modules/actions.js';

const Shoppingcart = (props) => {

  const {items, removeFromCart} = props;

  return (
    <Fragment>
        <ul>
           {items.map(product => (
             <li key={product.id}>
               <p> {product.title} | ${product.price} | quantity{product.quantity}
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
         <button>Check out</button>
     </Fragment>
  );
}

const mapStoreToProps = (store) => ({
  items: Object.values(store.cart)
})

const mapActionsToProps = {
removeFromCart: removeFromCart
}

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(Shoppingcart);
