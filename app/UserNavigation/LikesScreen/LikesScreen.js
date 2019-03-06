import React from 'react';
import {View,Text,ImageBackground,ScrollView,Image} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './LikesStyles';
import Notify from '../../Components/Notify/Notify';
export default class LikesScreen extends React.Component {

    static navigationOptions = {
        title: 'Likes',
        header: null
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackgroundThird.png')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}
                    centerComponent={{text: 'Likes', style:{color:'#fff'}}}
                    rightComponent={{icon: 'content-paste', color:'#fff'}}
                />
                <View style={styles.border}>
                    <ScrollView style={styles.ScrollLikes}>
                        <Notify/>
                        <Notify/>
                        <Notify/>
                        <Notify/>
                        <Notify/>
                        <Notify/>
                        <Notify/>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}

