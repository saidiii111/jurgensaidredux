export function reducer (state = {}, action){
  const {cart, products} = state;
  const {item} = action || {};
  const {id, title, price} = item || {};
  let inventory, quantity;

  switch (action.type) {
  case 'ADD_TO_CART':
    inventory = products[id].inventory;
    quantity = cart[id] || {...action, quantity: 0} ;
    // quantity = cart[id] ? cart[id].quantity : 0

    if (inventory <= 0) return state;

       return {
         ...state,
          products: {
            ...products,
            [id]: {
              id: id,
              title: title,
              price: price,
              inventory: inventory - 1
            }
          },

           cart: {
             ...cart,
             [id]: {
               id: id,
               title: title,
               price: price,
               quantity: quantity + 1
             }
           }
        }

  case 'REMOVE_FROM_CART':

  inventory = products[id].inventory;
  // quantity = cart[id] || {...action, quantity: 0} ;
  quantity = cart[id].quantity;
      if (quantity <=0) return state;

      return {
        ...state,
         products: {
           ...products,
           [id]:{
             id: id,
             title: title,
             price: price,
             inventory: inventory + 1
           }
         },

         cart: {
            ...cart,

            [id]: {
              id: id,
              title: title,
              price: price,
              quantity: quantity - 1
            }
          }
        }
  default:
    return state;
  }
}
