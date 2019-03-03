import React from 'react';
import {View,Text,Image,AppRegistry} from 'react-native';
import styles from './Styles';

export default class NewsPost extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.NewsPostContain}>
                <View style={styles.NewsPostTitleContain}>
                    <View style={styles.NewsPostDotsContain}>
                        <View style={styles.NewsPostDecorDot}/>
                        <View style={styles.NewsPostDecorDot}/>
                        <View style={styles.NewsPostDecorDot}/>
                    </View>
                    <Text style={styles.NewsPostTitleText}>Title</Text>
                    <View style={styles.NewsPostTitleNullContain}/>
                </View>
                <View style={styles.NewsPostImageContain}>
                    <Image style={styles.NewsPostImage}/>
                </View>
                <View style={styles.NewsPostDescriptionContain}>
                    <Text style={styles.NewsPostDescriptionText}>Something about this...</Text>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('NewsPost',()=>NewsPost);