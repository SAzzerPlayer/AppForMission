import React from 'react';
import {AsyncStorage,AppRegistry,Alert,View,Text,Image} from 'react-native';
import styles from './Styles';

export default class Notify extends React.Component{
    _LoadUserData = async () => {
        let userData = await AsyncStorage.getItem('user:' + this.props.data.fromUser);
        this.setState({avatar: userData.avatar});
        for (let post of this.props.userData.posts) {
            if (this.props.data.post === post.id) {
                this.setState({image: post.image});
                break;
            }
        }
        this.setState({isLoaded: true});
    };
    constructor(props){
        super(props);
        this.state={avatar:'',image:'',isLoaded:false};
        this._LoadUserData();
    }
    render(){
        if(this.state.isLoaded) {
            return (
                <View style={styles.NotifyContain}>
                    <View style={styles.AvatarContain}>
                        <Image style={styles.AvatarImage} source={{uri: this.state.avatar}}/>
                    </View>
                    <View style={styles.notifyRowContain}>
                        <Text style={styles.NotifyText}>@{this.props.data.user} likes your post:</Text>
                    </View>
                    <View style={styles.PostImageContain}>
                        <Image style={styles.PostImage} source={{uri: this.state.image}}/>
                    </View>
                </View>
            );
        }
        else return(<View></View>);
    }
}

AppRegistry.registerComponent( 'Notify',()=>Notify);