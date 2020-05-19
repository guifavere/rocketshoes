import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from './pages/Cart';
import Main from './pages/Main';

import Header from './components/Header';

export default function Routes() {
  const screenOptions = {
    cardStyle: { backgroundColor: '#19191f' },
    headerBackTitleVisible: false,
    header: ({ navigation }) => <Header navigation={navigation} />,
  };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen component={Cart} name="Cart" />
        <Stack.Screen component={Main} name="Main" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
