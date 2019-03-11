import React from 'react';
import {Alert,AsyncStorage,AppRegistry,View,Text,Image,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './Styles';
import Notify from '../../classes/Notify';

export default class ImagePost extends React.Component{

    constructor(props){
        super(props);
        this._CheckPhotoIsLiked = this._CheckPhotoIsLiked.bind(this);
        this._LikePost=this._LikePost.bind(this);
        this._BreakLikePost=this._BreakLikePost.bind(this);
        this.state={isLiked:this._CheckPhotoIsLiked(),isDeleting:false};
    }
    _CheckPhotoIsLiked = () => {
        for(let element of this.props.data.likes){
            if(element === this.props.userData.username){
                return true;
            }
        }
        return false;
    };
    _PostDataDelete = async (key,user) => {
        await fetch('http://10.0.2.2:3000/posts/delete', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                key: key
            }),
        });
    };
    _DeleteImagePost = async () => {
        this.setState({isDeleting:true});
        await this._PostDataDelete(this.props.data.key,this.props.userData.username);
    };
    _DeletingProcess=()=>{
        Alert.alert(
            'Delete the post',
            'Are you sure?',
            [
                {text:'No',onPress:()=>{}},
                {text:'Yes',onPress:()=>{
                    this._DeleteImagePost();
                    }},

            ],
            {cancelable:false}
        )
    };
    _PostNewNotification = async (key,user) => {
        await fetch('http://10.0.2.2:3000/notifies/new', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                byUser: user,
                key: key,
                type: 'like',
                toUser: user
            }),
        });
    };
    _LikePost = () => {
        this._PostNewNotification(this.props.data.key,this.props.userData.username);
        this.setState({isLiked:true});
    };
    _PostDeleteNotification = async (key,user) => {
        await fetch('http://10.0.2.2:3000/notifies/delete', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                byUser:user,
                toUser:user,
                key:key,
                type:"like"
            }),
        });
    };
    _BreakLikePost = () => {
        this._PostDeleteNotification(this.props.data.key, this.props.userData.username);
        this.setState({isLiked: false});
    };
    render(){
        if(!this.state.isDeleting) {
            return (
                <View style={styles.PostUserContain}>
                    <View style={styles.InfoUserContain}>
                        <Image style={styles.AvatarUserImage} source={{uri: this.props.userData.avatar}}/>
                        <View style={styles.InfoUserNickNameContain}>
                            <Text style={styles.InfoUserNickNameText}>
                                {this.props.userData.username}
                            </Text>
                        </View>
                        {(!this.props.isCurrentUser &&
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} source={require('./materials/join.png')}/>
                            </View>)}
                        <View style={styles.InfoJoinContain}>
                            {(!this.props.isCurrentUser && <Text style={styles.InfoJoinText}>
                                Join
                            </Text>)}
                            {(this.props.isDeletingPost &&
                                <TouchableHighlight onPress={this._DeletingProcess}>
                                    <Image style={{width: 32, height: 32}} source={require('./materials/close.png')}/>
                                </TouchableHighlight>
                            )}
                        </View>
                    </View>
                    <View style={styles.PostImageContain}>
                        <Image style={styles.PostImage} source={{uri: this.props.data.image}}/>
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
                                    {this.props.data.likes.length}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.PostBottomRightContain}>
                            <TouchableWithoutFeedback style={styles.PostBottomRightTouch}>
                                <Text style={styles.PostBottomRightText}>
                                    {this.props.data.text}
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

AppRegistry.registerComponent('ImagePost',()=> ImagePost);