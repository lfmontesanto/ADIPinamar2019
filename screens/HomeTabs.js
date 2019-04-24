import React from 'react';

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
 
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen'
import SearchHeader from './SearchHeader';


export const HomeTabs = createMaterialTopTabNavigator(
  {
    Movies: { screen: HomeScreen},
    Series: { screen: SecondScreen},
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
  },
);
export default createAppContainer(HomeTabs);

