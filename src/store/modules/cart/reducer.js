import { produce } from 'immer';

import { toBRLCurrency } from '../../../utils/format';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(prod => prod.id === action.id);
        const total = action.amount * draft[productIndex].price;

        draft[productIndex].amount = action.amount;
        draft[productIndex].total = total;
        draft[productIndex].formattedTotal = toBRLCurrency(total);
      });
    default:
      return state;
  }
}
