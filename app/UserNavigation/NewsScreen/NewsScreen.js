import React from 'react';
import {View,Text,ImageBackground,Image,ScrollView,Picker} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './NewsStyles';
import NewsPost from '../../Components/NewsPost/NewsPost';
/*
* ТОЛЬКО ШАБЛОН. ЕЩЕ НЕ ЗАКОНЧЕН ЭКРАН
*
* */

export default class NewsScreen extends React.Component {

    static navigationOptions = {
        title: 'News'
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackgroundThird.png')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}
                    centerComponent={{text: 'News', style:{color:'#fff'}}}
                    rightComponent={{icon: 'settings', color:'#fff'}}
                />
                <View style={{height:24}}>
                <Picker/>
                </View>
                <ScrollView style={styles.ScrollNews}>
                    <NewsPost/>
                    <NewsPost/>
                    <NewsPost/>
                    <NewsPost/>
                    <NewsPost/>
                    <NewsPost/>
                    <NewsPost/>
                </ScrollView>
                </ImageBackground>
        )
    }
}