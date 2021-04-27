import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Card from 'src/Screens/card.js';
import CardInfo from 'src/Screens/cardInfo.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="CardInfo" component={CardInfo} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
