import { createStackNavigator } from "react-navigation";

import HomeTabs from "./HomeTabs";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ShowScreen from "../screens/ShowScreen";
import ReviewScreen from "../screens/ReviewScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";


const HomeStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  HomeTabs: {
    screen: HomeTabs,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#633689"
      },
      headerTintColor: "#FFFFFF",
      title: "PelisPedio"
    }
  },
  Show: ShowScreen,
  Review: ReviewScreen,
  ChangePassword : ChangePasswordScreen

});

export default HomeStack;
