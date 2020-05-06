import React from 'react';

import {
  Product,
  ProductList,
  Image,
  Price,
  Title,
  Button,
  Quantity,
  Label,
} from './styles';

export default function Main() {
  const products = [1, 2, 3, 4, 5];

  return (
    <ProductList
      data={products}
      horizontal
      keyExtractor={item => item}
      renderItem={() => (
        <Product>
          <Image
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
            }}
          />
          <Title>Tênis de caminhada leve confortável</Title>
          <Price>R$ 179,90</Price>
          <Button>
            <Quantity>1</Quantity>
            <Label>Adicionar</Label>
          </Button>
        </Product>
      )}
    />
  );
}
