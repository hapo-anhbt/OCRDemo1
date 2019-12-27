import React,{Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {StackNavigator } from 'react-navigation';
import Swiper, {} from 'react-native-swiper';
export default class HDSD extends Component{
    render(){
        return(
            <Swiper style={styles.wrapper} >
                    <View style={styles.slide1}>
                        <Image style={styles.image} source={{uri:'https://anh.eva.vn/upload/1-2017/images/2017-03-22/ngo-ngang-voi-nhung-buc-anh-chup-man-dem-dep-than-thanh-2-1490146901-width600height899.jpg'}}></Image>
                        <Text style={styles.title}>タイトル１ </Text>
                        <Text>日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保しました。</Text>
                        <Text style={styles.footerText}>次へ</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.image}  source={{uri:'https://anh.eva.vn/upload/1-2017/images/2017-03-22/ngo-ngang-voi-nhung-buc-anh-chup-man-dem-dep-than-thanh-2-1490146901-width600height899.jpg'}}></Image>
                        <Text style={styles.title} >タイトル 2 </Text>
                        <Text>日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保しました。</Text>
                        <Text style={styles.footerText}>次へ</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.image} source={{uri:'https://anh.eva.vn/upload/1-2017/images/2017-03-22/ngo-ngang-voi-nhung-buc-anh-chup-man-dem-dep-than-thanh-2-1490146901-width600height899.jpg'}}></Image>
                        <Text style={styles.title} >タイトル 3 </Text>
                        <Text>日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保しました。</Text>
                        <Text style={styles.footerText}>完了</Text>
                    </View>
            </Swiper>
         
        )
    }
  
}

const styles = StyleSheet.create({
    wrapper: {},
    container:{
        textAlign: "center",
        margin: 20,
    },
    footerText:{
        color: '#3078F1',
        fontSize: 18,
        fontWeight:'bold',
        margin: 10,
    },
    image: {
        top: 0,
        left: 0,
        right: 0,
        height: 400,
        aspectRatio: 0.91,
       // resizeMode:'contain',
        width: null,
       
    },
    title:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight:'bold',
        textAlign:'center',
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })