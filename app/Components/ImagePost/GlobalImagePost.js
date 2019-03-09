import React from 'react';
import {Alert,AsyncStorage,AppRegistry,View,Text,Image,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './Styles';
import Notify from '../../classes/Notify';

export default class GlobalImagePost extends React.Component{
    _LoadUserData = async() =>{
        let data=await AsyncStorage.getItem('user:'+this.props.data.user);
        this.setState({userData:data,isLoading:false})
    };
    constructor(props){
        super(props);
        let isLiked=false;
        this.state={isLikedByCurrentUser:false,isLoading:true,userData:{}};
        this._LoadUserData();
        //for(let notify of this.state.userData.notifications){
        //    if(notify.post === this.props.item.id){
        //        isLiked=true;
        //        break;
        //   }
        //}
        //this.setState({isLikedByCurrentUser:isLiked});
        /*Alert.alert(this.state.userData.nickname+' '+
        +this.state.userData.avatar+ ' '+
            +this.state.userData+
        +this.props.item.user);*/

    }
    _SaveData = async()=>{
        try{
            await AsyncStorage.setItem('user:'+this.state.userData.nickname,
                JSON.stringify(this.props.userData));
            await AsyncStorage.setItem('currentUser:',JSON.stringify(this.state.userData));
        }
        catch(exception){
            Alert.alert('Wrong save post! ' + exception)
        }
    };

    _isLikedPost=()=>{
        //for(let elem of this.state.userData.notifications){
        //    if(elem.post === this.props.item.id){
        //        this.state.userData.notifications.splice(this.state.userData.notifications.indexOf(elem),1);
        //        break;
         //   }
        //}
        //for(let elem of this.state.userData.history){
        //    if(elem.post === this.props.item.id){
        //        this.state.userData.history.splice(this.state.userData.history.indexOf(elem),1);
        //        break;
        //    }
        //}
        this.props.item.likes-=1;
        this.props.extraData.setState({userData:this.state.userData});
        this._SaveData();
        this.setState({isLikedByCurrentUser:false});
    };
    _isNotLikedPost=()=>{
        let note = new Notify();
        note.id=Date.now();
        note.fromUser=this.props.userData.nickname;
        note.post=this.props.data.id;
        note.type='like';
        note.date=new Date();
        this.state.userData.notifications.push(note.getObject());
        this.state.userData.history.push(note.getObject());
        this.state.item.likes+=1;
        this.props.extraData.setState({userData:this.props.userData});
        this._SaveData();
        this.setState({isLikedByCurrentUser:true});
    };
    render(){
        if(!this.state.isLoading) {
            return (
                <View style={styles.PostUserContain}>
                    <View style={styles.InfoUserContain}>
                        <Image style={styles.AvatarUserImage} source={{uri: this.state.userData.avatar}}/>
                        <View style={styles.InfoUserNickNameContain}>
                            <Text style={styles.InfoUserNickNameText}>
                                {this.state.userData.nickname}
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
                        <Image style={styles.PostImage} source={{uri: this.props.item.image}}/>
                    </View>
                    <View style={styles.PostBottomContain}>
                        <View style={styles.PostBottomLeftContain}>
                            <View>
                                {(this.state.isLikedByCurrentUser === false && <TouchableHighlight
                                    style={styles.PostBottomLikeTouchable}
                                    onPress={this._isNotLikedPost}
                                >
                                    <Image style={styles.PostLikeIconImage} source={require('./materials/heart.png')}/>
                                </TouchableHighlight>)}
                                {(this.state.isLikedByCurrentUser === true && <TouchableHighlight
                                    style={styles.PostBottomLikeTouchable}
                                    onPress={this._isLikedPost}
                                >
                                    <Image style={styles.PostLikeIconImage}
                                           source={require('./materials/hearton.png')}/>
                                </TouchableHighlight>)}
                            </View>
                            <View style={styles.PostBottomAmmoLikesContain}>
                                <Text style={styles.PostBottomAmmoLikesText}>
                                    {this.props.item.likes}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.PostBottomRightContain}>
                            <TouchableWithoutFeedback style={styles.PostBottomRightTouch}>
                                <Text style={styles.PostBottomRightText}>
                                    {this.props.item.text}
                                </Text>
                            </TouchableWithoutFeedback>

                        </View>
                    </View>
                </View>
            );
        }
        else return (<View><Text>11</Text></View>);
    }
}

AppRegistry.registerComponent('GlobalImagePost',()=> GlobalImagePost);