import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from './pages/Cart';
import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen component={Main} name="Main" />
        <Stack.Screen component={Cart} name="Cart" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
