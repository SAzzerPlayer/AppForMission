import React from 'react';
import {View,Text} from 'react-native';
import styles from './Styles';
export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile'
    };

    render(){
        return(
            <View style={styles.profileView}>
                <Text>This is a Profile!</Text>
            </View>
        )
    }
}