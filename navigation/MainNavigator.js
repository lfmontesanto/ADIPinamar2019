import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/HomeTabs';
import RegisterScreen from '../screens/RegisterScreen';

const HomeStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Register: RegisterScreen,
  HomeTabs: {
    screen: HomeTabs,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'TabExample'
    }
  }
});

export default HomeStack;
