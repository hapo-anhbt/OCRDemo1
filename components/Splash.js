import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class Splash extends Component{
    // constructor(props){
    //     super(props),
    //     setInterval(() => {
    //         this.setState({timer: this.state.timer +1})
    //     },1000)
    // }
    render(){
        return(
            <View style={styles.container}>
                    <Text style={styles.splashText}>HapoOCR</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#C9DAF8',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#3078F1',
    }
})