import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

const HomeStack = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Register: RegisterScreen,
});

export default HomeStack;
