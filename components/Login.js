import React,{Component} from 'react';
import {StyleSheet, Text, View,TextInput, SafeAreaView, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
     StatusBar,Button} from 'react-native';
export default class Login extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <KeyboardAvoidingView behavior='' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Text style={styles.title}>HapoOCR</Text>
                                <Text style={styles.detail}>アカウント情報を入力してください.</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text>メールアドレス</Text>
                                <TextInput style={styles.input} placeholder='Abc@example.com'
                                keyboardType='email-address' autoCorrect={false} ref='txtEmail'/>
                                <Text>パスワード</Text>
                                <TextInput style={styles.input} placeholder='Password'
                                secureTextEntry={true} autoCorrect={false} ref='txtPassword'/>
                                <Text >パスワードを忘れた方はこちら</Text>
                                <Button style={styles.buttonLogin}  title='ログイン'/>
                                <Text></Text>
                                <Button color='#FFFFFF' style={styles.buttonClick} title='HapoOCRに登録'/>
                                <Button title='利用ガイド'/>
                            </View>
                            <View>
                                
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
        justifyContent:'center',
        flex: 1,
    },
    title:{
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
        // backgroundColor:'red',
    },
    input:{
        height: 40,
        borderColor:'#000000',
        borderWidth: 0.5,
        backgroundColor:'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        marginTop: 2,
        marginBottom: 10,
    },
    buttonLogin:{
        backgroundColor:'#0076EC',
        marginTop: 5,
        color: '#000000',
        marginBottom: 5,
        paddingTop: 10,
    },
    buttonClick:{
        borderBottomColor: '#000000',
        borderBottomWidth: 0.7,
        marginBottom: 5,
        color:'#0076EC',
        borderWidth: 0.5,
        borderColor: '#0076EC'
    }



})
