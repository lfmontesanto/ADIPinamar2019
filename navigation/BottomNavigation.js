import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MyReviewsScreen from "../screens/MyReviewsScreen";
import UserScreen from "../screens/UserScreen";

export const BottomNavigation = createMaterialBottomTabNavigator({
    "Mis Reseñas": { screen: MyReviewsScreen },
    Usuario: { screen: UserScreen }
}, {
  initialRouteName: 'Album',
  activeTintColor: '#F44336',
});