import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Cart, CartBadge, Container, Logo, LogoContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Cart>
        <Icon color="#fff" name="shopping-basket" size={25} />
        <CartBadge>3</CartBadge>
      </Cart>
    </Container>
  );
}
