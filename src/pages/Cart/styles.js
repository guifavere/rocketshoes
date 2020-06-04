import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 20px;
  padding: 10px;
`;

export const CartItems = styled.FlatList`
  max-height: 300px;
`;

export const Product = styled.View``;

export const ProductImage = styled.Image`
  background: #ececec;
  height: 80px;
  width: 80px;
`;

export const ProductTitle = styled.Text`
  color: #333;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
`;

export const ProductPrice = styled.Text`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
`;

export const Message = styled.Text`
  color: #999;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
`;

export const Total = styled.Text`
  color: #000;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1.6px;
  line-height: 35px;
  margin: 5px 0 30px;
  text-align: center;
`;

export const CheckoutButton = styled.TouchableOpacity`
  justify-content: center;
  background: #7159c1;
  border-radius: 4px;
  height: 42px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
`;
