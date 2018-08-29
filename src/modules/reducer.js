export function reducer (state = {}, action){
  const {inventory} = state;
  const {id} = action.item || {}

  switch (action.type) {
    case 'ADD_TO_CART':
    if (state.products[id].inventory <= 0) return state;
       return {
         ...state,
          products: {
            ...state.products,
            [id]:{
              ...state.products[id],
              inventory: state.products[id].inventory - 1
            }
          }
        }

    default:
      return state;

  }
}
