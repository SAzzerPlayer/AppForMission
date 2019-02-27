import React from 'react';
import {View,Text} from 'react-native';
import styles from './Styles';

export default class NewsScreen extends React.Component {

    static navigationOptions = {
        title: 'News'
    };

    render(){
        return(
            <View style={styles.newsView}>
                <Text>This is a News!</Text>
            </View>
        )
    }
}