import { createMaterialTopTabNavigator,createAppContainer } from "react-navigation";

import MoviesScreen from "../screens/MoviesScreen";
import SeriesScreen from "../screens/SeriesScreen";
import MyReviewsScreen from "../screens/MyReviewsScreen";
import UserScreen from "../screens/UserScreen";

export const HomeTabs = createMaterialTopTabNavigator(
  {
    Películas: { screen: MoviesScreen },
    Series: { screen: SeriesScreen },
    "Mis Reseñas": { screen: MyReviewsScreen },
    Usuario: { screen: UserScreen }
  },
  { 
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style:{ backgroundColor: '#633689' },
      labelStyle:{ textAlign: 'center' },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  },
);
export default createAppContainer(HomeTabs);

