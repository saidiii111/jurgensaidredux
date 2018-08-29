export function reducer (state = {}, action){
  const {inventory} = state;
  const {id} = action.item || {}

  switch (action.type) {
    case 'ADD_TO_CART':
       return {
         ...state,
          products: {
            ...state.products,
            [id]:{
              ...state.products[id],
              inventory: products - 1
            }
          }
        }

    default:
      return state;

  }
}
