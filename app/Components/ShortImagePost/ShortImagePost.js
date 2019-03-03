import React from 'react';
import {TouchableHighlight,View,Text,Image} from 'react-native';
import styles from './Styles';

export default class ShortImagePost extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableHighLight>
                <Image style={styles.ShortPostImage} source={require('./materials/image.jpg')}/>
            </TouchableHighLight>
        );
    }
}