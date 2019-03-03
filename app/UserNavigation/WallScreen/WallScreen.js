import React from 'react';
import {Alert,View,Text,ImageBackground,ScrollView,Image} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './WallStyles';
import ImagePost from '../../Components/ImagePost/ImagePost';

export default class WallScreen extends React.Component {

    static navigationOptions = {
        title: 'Wall'
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackgroundThird.png')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}
                    centerComponent={{text: 'Wall', style:{color:'#fff'}}}
                    rightComponent={{icon: 'settings', color:'#fff'}}
                />
                <ScrollView style={styles.Scroll}>
                    <ImagePost isCurrentUser={false}/>
                    <ImagePost isCurrentUser={false}/>
                    <ImagePost isCurrentUser={false}/>
                    <ImagePost isCurrentUser={false}/>
                </ScrollView>
                </ImageBackground>
        )
    }
}