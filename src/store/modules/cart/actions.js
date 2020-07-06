export function addToCartRequest(id) {
  return { type: '@cart/ADD_TO_CART_REQUEST', id };
}

export function addToCartSuccess(product) {
  return { type: '@cart/ADD_TO_CART_SUCCESS', product };
}

export function updateAmountSuccess(id, amount) {
  return { type: '@cart/UPDATE_AMOUNT_SUCCESS', id, amount };
}
