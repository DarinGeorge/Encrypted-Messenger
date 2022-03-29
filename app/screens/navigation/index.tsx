import React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import usePallete from '../../hooks/usePallete';
import Home from '../Home';
import {RootStackParamList} from '../../../types';

export default function Navigation() {
  const {scheme} = usePallete();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const App = createNativeStackNavigator<RootStackParamList>();
function AppNavigator() {
  return (
    <App.Navigator initialRouteName='Home'>
      <App.Screen name='Home' component={Home} options={{headerShown: false}} />
    </App.Navigator>
  );
}
