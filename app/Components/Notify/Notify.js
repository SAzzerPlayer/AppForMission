import React from 'react';
import {AsyncStorage,AppRegistry,Alert,View,Text,Image} from 'react-native';
import styles from './Styles';

export default class Notify extends React.Component{
    _GetImagePost = async () => {
        let data = {};
        await fetch("http://10.0.2.2:3000/posts?username="+this.props.userData.username
            +"&key="+this.props.data.key)
            .then((response)=>{
                return response.json()
                    .then((responseJson)=>{
                        data = responseJson;
                    })
            });
        this.setState({image:data.element.image});
    };
    _GetUserData = async () => {
        let data = {};
        await fetch("http://10.0.2.2:3000/users?username="+this.props.data.byUser)
            .then((response)=>{
                return response.json()
                    .then((responseJson)=>{
                        data=responseJson;
                    })
            });
        this.setState({userData:data,isLoading:false});
    };

    constructor(props){
        super(props);
        this._GetImagePost=this._GetImagePost.bind(this);
        this._GetUserData=this._GetUserData.bind(this);
        this.state={image:'',isLoading:true,userData:{}};
        this._GetImagePost();
        this._GetUserData();
    }
    render(){
        if(!this.state.isLoading) {
            return (
                <View style={styles.NotifyContain}>
                    <View style={styles.AvatarContain}>
                        <Image style={styles.AvatarImage} source={{uri: this.state.userData.avatar}}/>
                    </View>
                    <View style={styles.notifyRowContain}>
                        <Text style={styles.NotifyText}>@{this.props.data.byUser} likes your post:</Text>
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