import styled from 'styled-components/native';

import logo from '../../assets/rocketshoes.png';

export const Cart = styled.TouchableOpacity``;

export const CartBadge = styled.Text`
  align-items: center;
  background: #7159c1;
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: 12px;
  height: 16px;
  justify-content: center;
  position: absolute;
  right: -4px;
  top: -4px;
  width: 16px;
`;

export const Container = styled.View`
  align-items: center;
  background: #141419;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({ source: logo })``;

export const LogoContainer = styled.TouchableOpacity``;
