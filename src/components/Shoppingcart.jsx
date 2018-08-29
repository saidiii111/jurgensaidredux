import React from 'react';

import {connect} from 'react-redux';
import {removeFromCart, removeAllFromCart} from '../modules/actions.js'


// const item = ({products})=

const ShoppingCart = (props) => {

  const {items} = props;

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
  items: Object.values(store.products)
})

const mapActionsToProps = {

}




export default connect(
  mapStoreToProps,
  mapActionsToProps
)(ShoppingCart);
