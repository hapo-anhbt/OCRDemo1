/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './components/Login'
import Splash from './components/Splash'
// import AppStackNavigator from './components/AppStackNavigator';
import { Component } from 'react';
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
AppRegistry.registerComponent('OCRDemo', () => Login);
