import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeTabs from '../screens/HomeTabs';
import RegisterScreen from '../screens/RegisterScreen';

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