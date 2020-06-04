import React from 'react';

import {
  Container,
  CartItems,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Message,
  Total,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

export default function Cart() {
  const products = [1, 2, 3, 4, 5];

  return (
    <Container>
      <CartItems
        data={products}
        keyExtractor={item => String(item)}
        renderItem={() => (
          <Product>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
            <ProductPrice>R$ 179,90</ProductPrice>
          </Product>
        )}
      />
      <Message>Total</Message>
      <Total>R$ 1.619,10</Total>
      <CheckoutButton>
        <CheckoutButtonText>Finalizar pedido</CheckoutButtonText>
      </CheckoutButton>
    </Container>
  );
}
