import React from 'react';

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
  const products = [1, 2, 3, 4, 5];

  return (
    <Container>
      <CartItems
        data={products}
        keyExtractor={item => String(item)}
        renderItem={() => (
          <CartItem>
            <Product>
              <ProductImage
                source={{
                  uri:
                    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                }}
              />
              <ProductDetails>
                <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
                <ProductPrice>R$ 179,90</ProductPrice>
              </ProductDetails>
            </Product>
            <Amount>
              <AmountInput keyboardType="number-pad" value="3" />
              <Subtotal>R$ 179,90</Subtotal>
            </Amount>
          </CartItem>
        )}
      />
      <CartDetails>
        <Title>Total</Title>
        <Total>R$ 1.619,50</Total>
      </CartDetails>
      <CheckoutButton>
        <CheckoutButtonText>Finalizar pedido</CheckoutButtonText>
      </CheckoutButton>
    </Container>
  );
}
