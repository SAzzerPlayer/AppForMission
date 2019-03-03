import React from 'react';
import {AppRegistry,View,Text,Image} from 'react-native';
import styles from './Styles';

export default class Notify extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.NotifyContain}>
                <View style={styles.AvatarContain}>
                    <Image style={styles.AvatarImage} source={require('./materials/avatar.png')}/>
                </View>
                <View style={styles.notifyRowContain}>
                    <Text style={styles.NotifyText}>@Username likes your post:</Text>
                </View>
                <View style={styles.PostImageContain}>
                    <Image style={styles.PostImage} source={require('./materials/image-2.jpg')}/>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent( 'Notify',()=>Notify);