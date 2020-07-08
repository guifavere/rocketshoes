import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { toBRLCurrency } from '../../../utils/format';
import api from '../../../services/api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Error', 'Product amount requested is out');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);
    const formattedPrice = toBRLCurrency(response.data.price);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice,
      total: response.data.price,
      formattedTotal: formattedPrice,
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const { amount: stockAmount } = stock.data;

  if (amount > stockAmount) {
    Alert.alert('Error', 'Product amount requested is out');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
