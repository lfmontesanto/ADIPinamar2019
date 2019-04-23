import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
});

export default HomeStack;
