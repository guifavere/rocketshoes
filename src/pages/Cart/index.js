import React from 'react';

import {
  Container,
  ProductsList,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
} from './styles';

export default function Cart() {
  const products = [1, 2, 3];

  return (
    <Container>
      <ProductsList
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
            <ProductInfo>
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>R$ 179,90</ProductPrice>
            </ProductInfo>
          </Product>
        )}
      />
    </Container>
  );
}
