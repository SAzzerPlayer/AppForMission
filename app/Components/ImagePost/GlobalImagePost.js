import React from 'react';
import {Alert,AsyncStorage,AppRegistry,View,Text,Image,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './Styles';
import Notify from '../../classes/Notify';

export default class GlobalImagePost extends React.Component{

    _GetUserData = async () => {
        let data={};
        await fetch("http://10.0.2.2:3000/users?username="+this.state.ownerPost)
            .then((response)=>{return response.json()
                .then((responseJson)=>{
                    data = responseJson;
                })});
        this.setState({ownerData:data});
        this._CheckPhotoIsLiked();
    };
    _CheckPhotoIsLiked = () => {
        for(let element of this.state.postData.likes){
            if(element === this.props.currentUser.username){
                this.setState({isLiked:true});
                break;
            }
        }
        this.setState({isLoading:false});
    };
    constructor(props){
        // currentUser - the data of current user
        // userData - the data of owner of this post
        super(props);
        this._GetUserData=this._GetUserData.bind(this);
        this._CheckPhotoIsLiked=this._CheckPhotoIsLiked.bind(this);
        this.state={isLoading:true,isJoined:false,postData:this.props.data.post,ownerPost:this.props.data.username,ownerData:{},isLiked:false};
        this._GetUserData();

    }

    _PostNewNotification = async (key,byUser,toUser) => {
        await fetch('http://10.0.2.2:3000/notifies/new', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                byUser: byUser,
                key: key,
                type: 'like',
                toUser: toUser
            }),
        });
    };
    _LikePost = () => {
        this._PostNewNotification(this.state.postData.key,this.props.currentUser.username,this.state.ownerPost);
        this.setState({isLiked:true});
    };
    _PostDeleteNotification = async (key,byUser,toUser) => {
        await fetch('http://10.0.2.2:3000/notifies/delete', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                byUser:byUser,
                toUser:toUser,
                key:key,
                type:"like"
            }),
        });
    };
    _BreakLikePost = () => {
        this._PostDeleteNotification(this.state.postData.key, this.props.currentUser.username,this.state.ownerPost);
        this.setState({isLiked: false});
    };
    render(){
        if(!this.state.isLoading) {
            return (
                <View style={styles.PostUserContain}>
                    <View style={styles.InfoUserContain}>
                        <Image style={styles.AvatarUserImage} source={{uri: this.state.ownerData.avatar}}/>
                        <View style={styles.InfoUserNickNameContain}>
                            <Text style={styles.InfoUserNickNameText}>
                                {this.state.ownerData.username}
                            </Text>
                        </View>
                            {(!this.state.isJoined && <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} source={require('./materials/join.png')}/>
                            </View>)}
                        {(this.state.isJoined && <View>

                            </View>
                            )}
                        <View style={styles.InfoJoinContain}>
                            {(!this.state.isJoined && <Text style={styles.InfoJoinText}>
                                Join
                            </Text>)}
                            {(this.state.isJoined && <View>

                            </View>)}
                        </View>
                    </View>
                    <View style={styles.PostImageContain}>
                        <Image style={styles.PostImage} source={{uri: this.state.postData.image}}/>
                    </View>
                    <View style={styles.PostBottomContain}>
                        <View style={styles.PostBottomLeftContain}>
                            <View>
                                {(!this.state.isLiked && <TouchableHighlight
                                    style={styles.PostBottomLikeTouchable}
                                    onPress={this._LikePost}
                                >
                                    <Image style={styles.PostLikeIconImage} source={require('./materials/heart.png')}/>
                                </TouchableHighlight>)}
                                {(this.state.isLiked && <TouchableHighlight
                                    style={styles.PostBottomLikeTouchable}
                                    onPress={this._BreakLikePost}
                                >
                                    <Image style={styles.PostLikeIconImage}
                                           source={require('./materials/hearton.png')}/>
                                </TouchableHighlight>)}
                            </View>
                            <View style={styles.PostBottomAmmoLikesContain}>
                                <Text style={styles.PostBottomAmmoLikesText}>
                                    {this.state.postData.likes.length}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.PostBottomRightContain}>
                            <TouchableWithoutFeedback style={styles.PostBottomRightTouch}>
                                <Text style={styles.PostBottomRightText}>
                                    {this.state.postData.text}
                                </Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            );
        }
        else return (<View></View>);
    }
}

AppRegistry.registerComponent('GlobalImagePost',()=> GlobalImagePost);