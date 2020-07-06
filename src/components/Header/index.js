import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Cart, CartBadge, Container, Logo, LogoContainer } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  const goCart = useCallback(() => navigation.navigate('Cart'), [navigation]);
  const goHome = useCallback(() => navigation.navigate('Main'), [navigation]);

  return (
    <Container>
      <LogoContainer onPress={goHome}>
        <Logo />
      </LogoContainer>
      <Cart onPress={goCart}>
        <Icon color="#fff" name="shopping-basket" size={25} />
        <CartBadge>{cartSize}</CartBadge>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
