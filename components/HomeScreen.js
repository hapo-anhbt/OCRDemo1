import React,{Component} from 'react';
import {StyleSheet, Text, View,TextInput, SafeAreaView, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,Image,
     StatusBar,Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component{
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={styles.Header}>
                            <Text style={styles.title}>ホーム</Text>
                            <TextInput style={styles.Input} placeholder="検索" placeholderTextColor="#FFFFFF"></TextInput>
                            
                        </View>
                        <View style={styles.filterText}>
                            <Text>本日</Text>
                            <View style={styles.content}>
                                <Image style={styles.image} source={{uri:"https://congngheviet.com/wp-content/uploads/2019/10/Joker-2019-Niko-Tanvernise8.jpeg"}}></Image>
                                <Text>日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保しました。</Text>
                            </View>
                        </View>
                        <View style={styles.filterText}>
                            <Text>本日</Text>
                            <View style={styles.content}>
                                <Image style={styles.image} source={{uri:"https://congngheviet.com/wp-content/uploads/2019/10/Joker-2019-Niko-Tanvernise8.jpeg"}}></Image>
                                <Text>日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保しました。</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
}

const styles = StyleSheet.create({
    Header:{
        backgroundColor:'#C9DAF8',
        padding: 10,
        height: 100,
    },
    title:{
        fontWeight:'bold',
        fontSize: 24,
    },
    Input:{
        backgroundColor:'#146bed',
        color: '#FFFFFF',
        paddingHorizontal:10,
        fontSize: 18,
    },
    content:{
        backgroundColor:"#e5e5e6"
    },
    image:{
        height: 200, 
        width: null,
    },
    filterText:{
        margin:10,
        marginBottom: 0,
    }
    
})