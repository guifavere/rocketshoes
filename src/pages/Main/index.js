import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { addToCartRequest } from '../../store/modules/cart/actions';
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

  const dispatch = useDispatch();

  const amounts = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  function handleAddProduct(id) {
    return dispatch(addToCartRequest(id));
  }

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
          <AddButton onPress={() => handleAddProduct(product.id)}>
            <AddButtonBadge>{amounts[product.id] || 0}</AddButtonBadge>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>
        </Product>
      )}
    />
  );
}
