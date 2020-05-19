import styled from 'styled-components/native';
import { darken } from 'polished';

export const ProductList = styled.FlatList`
  margin-top: 20px;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 358px;
  margin: 0 20px 20px;
  padding: 10px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  background: #ececec;
  height: 200px;
  margin-bottom: 10px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  color: #333;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 21px;
  height: 42px;
  overflow: hidden;
`;

export const ProductPrice = styled.Text`
  color: #000;
  font-family: 'Roboto';
  font-size: 21px;
  font-weight: bold;
  line-height: 25px;
  margin: 5px 0 14px;
`;

export const AddButton = styled.TouchableOpacity`
  align-items: stretch;
  border-radius: 4px;
  border: 1px solid green;
  flex-direction: row;
  height: 42px;
`;

export const AddButtonBadge = styled.Text`
  background: ${darken(0.1, '#7159c1')};
  color: #fff;
  line-height: 40px;
  padding-right: 12px;
  text-align: right;
  width: 53px;
`;

export const AddButtonText = styled.Text`
  background: #7159c1;
  color: #fff;
  flex-grow: 1;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
`;
