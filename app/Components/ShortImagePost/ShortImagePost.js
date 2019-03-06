import React from 'react';
import {TouchableHighlight,View,Text,Image} from 'react-native';
import styles from './Styles';

export default class ShortImagePost extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableHighlight>
                <Image style={styles.ShortPostImage} source={{uri:this.props.data.image}}/>
            </TouchableHighlight>
        );
    }
}