import React from 'react';

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
 
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen'
import AppNavigator from '../navigation/AppNavigator';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
export const HomeTabs = createMaterialTopTabNavigator(
  {
    Feed: { screen: HomeScreen},
    Setttings: { screen: SecondScreen},
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
export default createAppContainer(HomeTabs);

