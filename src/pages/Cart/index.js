import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { updateAmountRequest } from '../../store/modules/cart/actions';
import { toBRLCurrency } from '../../utils/format';

import {
  Amount,
  AmountText,
  AmountWrapper,
  CartDetails,
  CartItem,
  CartItems,
  CheckoutButton,
  CheckoutButtonText,
  Container,
  EmptyCartMessage,
  MinusButton,
  PlusButton,
  Product,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductTitle,
  Subtotal,
  Title,
  Total,
} from './styles';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const total = toBRLCurrency(
    cart.reduce((sumTotal, product) => sumTotal + product.total, 0)
  );

  const hasProducts = useMemo(() => cart.length > 0, [cart.length]);

  function decrement({ id, amount }) {
    return dispatch(updateAmountRequest(id, amount - 1));
  }

  function increment({ id, amount }) {
    return dispatch(updateAmountRequest(id, amount + 1));
  }

  return (
    <Container>
      {hasProducts ? (
        <CartItems
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <CartItem>
              <Product>
                <ProductImage source={{ uri: product.image }} />
                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.formattedPrice}</ProductPrice>
                </ProductDetails>
              </Product>
              <AmountWrapper>
                <Amount>
                  <MinusButton onPress={() => decrement(product)}>
                    <Icon color="#fff" name="remove" size={10} />
                  </MinusButton>
                  <AmountText>{product.amount}</AmountText>
                  <PlusButton onPress={() => increment(product)}>
                    <Icon color="#fff" name="add" size={10} />
                  </PlusButton>
                </Amount>
                <Subtotal>{product.formattedTotal}</Subtotal>
              </AmountWrapper>
            </CartItem>
          )}
        />
      ) : (
        <EmptyCartMessage>Carrinho vazio</EmptyCartMessage>
      )}
      <CartDetails>
        <Title>Total</Title>
        <Total>{total}</Total>
      </CartDetails>
      <CheckoutButton disabled={!hasProducts}>
        <CheckoutButtonText>Finalizar pedido</CheckoutButtonText>
      </CheckoutButton>
    </Container>
  );
}
