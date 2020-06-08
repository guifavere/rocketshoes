import styled from 'styled-components/native';

export const Amount = styled.View`
  align-items: center;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 10px;
`;

export const AmountInput = styled.TextInput`
  background: #fff;
  color: #666;
  font-family: Roboto;
  font-size: 14px;
  height: 26px;
  padding: 0;
  text-align: center;
  width: 50px;
`;

export const CartDetails = styled.View`
  align-items: center;
  margin: 30px 0;
`;

export const CartItem = styled.View``;

export const CartItems = styled.FlatList``;

export const CheckoutButton = styled.TouchableOpacity`
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  height: 42px;
  justify-content: center;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Container = styled.SafeAreaView`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  margin: 20px;
  padding: 15px;
`;

export const Product = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ProductDetails = styled.View``;

export const ProductImage = styled.Image`
  background: #ececec;
  height: 80px;
  margin-right: 10px;
  width: 80px;
`;

export const ProductPrice = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
`;

export const ProductTitle = styled.Text`
  color: #333;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
`;

export const Subtotal = styled.Text`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
`;

export const Title = styled.Text`
  color: #999;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const Total = styled.Text`
  color: #000;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
`;
