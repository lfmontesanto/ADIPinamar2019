import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeTabs from '../screens/HomeTabs';
import RegisterScreen from '../screens/RegisterScreen';
import SearchHeader from '../screens/SearchHeader';

const HomeStack = createStackNavigator({
  Login: LoginScreen,
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
