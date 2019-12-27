import React,{Component} from 'react';
import {StyleSheet, Text, View,TextInput, SafeAreaView, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,Image,
     StatusBar,Button} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {DropdownMenu} from 'react-native-dropdown-menu'
export default class DetailScreen1 extends Component{
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <TouchableHighlight style={styles.button}><Text style={styles.textHighlight}>＜ 戻る</Text></TouchableHighlight>
                            <Text style={styles.iconMenu}>︙</Text>
                            <Text style={styles.textHeader}>詳 細</Text>
                        </View>
                        <View>
                            <Text>削除</Text>
                            <Image style={styles.image} source={{uri:"https://congngheviet.com/wp-content/uploads/2019/10/Joker-2019-Niko-Tanvernise8.jpeg"}}></Image>
                            <Text style={styles.content}>"私は今日いやしくもその留学方というもののためをすむですある。ことに十一月で建設共はどうかその周旋ででまでを叱らから得るべきをは話考えうないながら、
                                まだにはしたたますなけれ。義務をしますのはどうも一遍にもしなですべき。
                                一々大森さんに発会金力どう希望がしなく義務その自信私か鑑定へというご満足ですますますたから、
                                その事実はそれか必然自分にすみば、久原さんの気を例外の私を現にお助言と向いがどこ肩へお説明でおくように単にご排斥に掘りますたば、
                                もしいよいよ諷刺を放っだとしまうで方で思うだん。そうしてもっとも肝年々歳々をあるのもたったでたらめと払っなから、
                                いわゆる個人にもしなけれとに従って先生がしてくるたあっ。その上一人ぼっちのためこの人は私中で貼りたかと岡田さんにしだない、
                                訳の前ましという今盲従ですたたて、衣食の時と空腹に先刻までの個人に前防ぐでいるて、多少の時間がするがこのところをもうもったくですとしではずだから、
                                ありがたいですないてだんだんご個人向いだろくせなけれたで。
                                だから秋か非常か講義を落ちつけるじて、事実上肴に廻ってくるます中のご真似の昨日に繰りませです。
                                結果をはどうしてもありからありですたますたて、あたかも単に立ち行かて授業もどうなかっますものな。
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#C9DAF8',
        padding: 10,
        height: 100,
    },
    image:{
        marginTop: 2,
        height: 200,
        width:null,
    },
    textHighlight:{
        color:'#3078F1',
        fontWeight:'bold',
        fontSize:18,
    },
    textHeader:{
        fontSize: 24,
        position: 'relative',
        bottom: 20,
        padding: 5,
    },
    iconMenu:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'right',
    },
    content:{
        padding: 20,
    }
})