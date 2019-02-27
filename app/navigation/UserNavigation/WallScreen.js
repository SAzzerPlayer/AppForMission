import React from 'react';
import {View,Text} from 'react-native';
import styles from './Styles';

export default class WallScreen extends React.Component {

    static navigationOptions = {
        title: 'Wall'
    };

    render(){
        return(
            <View style={styles.wallView}>
                <Text>This is a Wall!</Text>
            </View>
        )
    }
}