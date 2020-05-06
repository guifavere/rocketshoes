import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import api from '../../services/api';

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get('products');
        const newProducts = response.data.map(product => ({
          ...product,
          formattedPrice: 'R$ 50,00',
        }));

        setProducts(newProducts);
      } catch (error) {
        Alert.alert('Error', 'Error during fetching products');
      }
    };

    loadProducts();
  }, []);

  return (
    <ProductList
      data={products}
      horizontal
      keyExtractor={({ id }) => id}
      renderItem={({ item: product }) => (
        <Product>
          <Image source={{ uri: product.image }} />
          <Title>{product.title}</Title>
          <Price>{product.formattedPrice}</Price>
          <Button>
            <Quantity>1</Quantity>
            <Label>Adicionar</Label>
          </Button>
        </Product>
      )}
    />
  );
}
