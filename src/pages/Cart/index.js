import React from 'react';
import { useSelector } from 'react-redux';

import { toBRLCurrency } from '../../utils/format';

import {
  Amount,
  AmountInput,
  CartDetails,
  CartItem,
  CartItems,
  CheckoutButton,
  CheckoutButtonText,
  Container,
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
  const total = toBRLCurrency(
    cart.reduce((sumTotal, product) => sumTotal + product.total, 0)
  );

  return (
    <Container>
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
            <Amount>
              <AmountInput
                keyboardType="number-pad"
                value={String(product.amount)}
              />
              <Subtotal>{product.formattedTotal}</Subtotal>
            </Amount>
          </CartItem>
        )}
      />
      <CartDetails>
        <Title>Total</Title>
        <Total>{total}</Total>
      </CartDetails>
      <CheckoutButton>
        <CheckoutButtonText>Finalizar pedido</CheckoutButtonText>
      </CheckoutButton>
    </Container>
  );
}
