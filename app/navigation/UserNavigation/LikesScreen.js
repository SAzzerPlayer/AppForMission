import React from 'react';
import {View,Text} from 'react-native';
import styles from './Styles';
export default class LikesScreen extends React.Component {

    static navigationOptions = {
        title: 'Likes'
    };

    render(){
        return(
            <View style={styles.likesView}>
                <Text>This is a Likes!</Text>
            </View>
        )
    }
}