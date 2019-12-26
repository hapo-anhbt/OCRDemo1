import Login from './Login';
import Splash from './Splash';
import {createStackNavigator, createAppContainer} from 'react-navigation';
const AppNavigator = createStackNavigator({
    "Splash":{
        screen: Splash
    },
    "Login":{
        screen: Login
    },

},{
    initialRouteName : 'Splash'
})
export default createAppContainer(AppNavigator)