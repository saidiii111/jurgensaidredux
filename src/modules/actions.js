export function addToCart(item){
  return {
    type: 'ADD_TO_CART',
    item
  }
}

export function checkout(){
  return {
    type: 'CHECKOUT'
  }
}

export function removeFromCart(){
  return {
    type: 'REMOVE_FROM_CART'
  }
}

export function removeAllFromCart(){
  return {
    type: 'REMOVE_ALL_FROM_CART'
  }
}
