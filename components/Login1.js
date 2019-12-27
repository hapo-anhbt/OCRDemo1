import React,{Component} from 'react';
import {StyleSheet, Text, View,TextInput, SafeAreaView, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
     StatusBar,Button} from 'react-native';

    
export default class Login1 extends Component{

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <KeyboardAvoidingView behavior='' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Text style={styles.title}>HapoOCR</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.footerText}>登録完了しました.</Text>
                                <Text style={styles.footerText}>ありがとうございました。</Text>
                                <Button style={styles.buttonLogin}  title='登録'/>
                            </View>
                        </View>    
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    logoContainer:{
        alignItems:'center',
        top: 50,
        flex: 1,
    },
    title:{
        margin: 20,
        fontSize:40,
        fontWeight:'bold',
        color: '#0076EC',
        textAlign:'center'
    },
    detail:{
        textAlign:'center',
        fontSize:18,
        marginTop: 5,
        opacity: 0.7,
    },
    infoContainer:{
        position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        alignContent:'center',
        top: 170,
        // backgroundColor:'red',
    },
    buttonLogin:{
        backgroundColor:'#0076EC',
        marginTop: 5,
        color: '#000000',
        marginBottom: 5,
        paddingTop: 10,
    },
    footerText:{
        margin: 5,
        marginBottom: 5,
        textAlign: "center",
        fontSize: 18,
        fontWeight:'bold',
    }


})
