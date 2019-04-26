import { createStackNavigator } from "react-navigation";

<<<<<<< HEAD
import LoginScreen from '../screens/LoginScreen';
import HomeTabs from './HomeTabs';
import RegisterScreen from '../screens/RegisterScreen';
=======
import HomeTabs from "./HomeTabs";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ShowScreen from "../screens/ShowScreen";
import ReviewScreen from "../screens/ReviewScreen";
>>>>>>> 1090b93777fa7ec122e8ba3c35b41085f0c877ae

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
  Review: ReviewScreen
});

export default HomeStack;
