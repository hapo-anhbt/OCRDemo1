/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import Login from './components/Login'
import Splash from './components/Splash'
import HDSH from './components/HDSD'
import RegisterAccount from './components/RegisterAccount'
import Login1 from './components/Login1'
import Login2 from './components/Login2'
import SendEmail from './components/SendEmail';
import HomeScreen from './components/HomeScreen';
import DetailScreen1 from './components/DetailScreen1';
//import AppStackNavigator from './components/AppStackNavigator';
import App from './App';
//import { Component } from 'react';
// class Main extends Component{
//     constructor(props){
//         super(props);
//         this.state = { currentScreen: 'Splash'};
//         setTimeout(() => {
//             console.log('dấdaassđ')
//             this.setState({currentScreen: 'Login'})
//         },3000)
//     }
//     render(){
//         const { currentScreen } = this.state
//         let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Login/>
//         return mainScreen
//     }
// }
AppRegistry.registerComponent('OCRDemo', () => DetailScreen1);
