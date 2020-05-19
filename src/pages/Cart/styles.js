import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const ProductsList = styled.FlatList`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
`;

export const Product = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  background: #ececec;
  height: 80px;
  margin-right: 10px;
  width: 80px;
`;

export const ProductInfo = styled.View``;

export const ProductTitle = styled.Text`
  color: #333;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
`;

export const CartInfo = styled.View`
  background: #eee;
  border-radius: 4px;
`;
