import React from 'react';
import '../products.json';
import {connect} from 'react-redux';
import {addToCart} from '../modules/actions.js'


const ProductList = (props) => {

  const {items, add} = props;

  return (
     <ul>
       {items.map(product => (
         <li key={product.id}>
           <p> {product.title} | {product.price} | {product.inventory}
           </p>
           <button className = "addToCart" onClick={()=> add(product)}> Add to Cart </button>
         </li>
       ))}
     </ul>
  );
}

const mapStoreToProps = (store) => ({
  items: Object.values(store.products)
})

const mapActionsToProps = {
  add: addToCart
}

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(ProductList);
