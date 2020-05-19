import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import api from '../../services/api';
import { toBRLCurrency } from '../../utils/format';

import {
  Product,
  ProductList,
  ProductImage,
  ProductPrice,
  ProductTitle,
  AddButton,
  AddButtonBadge,
  AddButtonText,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get('products');
        const newProducts = response.data.map(product => ({
          ...product,
          formattedPrice: toBRLCurrency(product.price),
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
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage source={{ uri: product.image }} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.formattedPrice}</ProductPrice>
          <AddButton>
            <AddButtonBadge>1</AddButtonBadge>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>
        </Product>
      )}
    />
  );
}
