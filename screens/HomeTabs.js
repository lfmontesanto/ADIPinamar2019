import React from 'react';

import {
  createMaterialTopTabNavigator,
} from 'react-navigation';
 
import HomeScreen from './screens/HomeScreen';
import SecondPage from './screens/SecondPage';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
const HomeTabs = createMaterialTopTabNavigator(
  {
    Feed: { screen: HomeScreen },
    Settings: { screen: SecondPage },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);
 