import React from 'react';
import {Alert,AsyncStorage,AppRegistry,View,Text,Image,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './Styles';
import Notify from '../../classes/Notify';

export default class ImagePost extends React.Component{
    constructor(props){
        super(props);
        let isLiked=false;
        for(let notify of this.props.userData.notifications){
            if(notify.post === this.props.data.id){
                isLiked=true;
                break;
            }
        }
        this.state={isLikedByCurrentUser:isLiked}
    }
    _SaveData = async()=>{
        try{
            await AsyncStorage.setItem('user:'+this.props.userData.nickname,
                JSON.stringify(this.props.userData));
            await AsyncStorage.setItem('currentUser:',JSON.stringify(this.props.userData));
        }
        catch(exception){
            Alert.alert('Wrong save post! ' + exception)
        }
    };
    _DeleteFromGlobal = async () => {
      let global = JSON.parse(await AsyncStorage.getItem('global:'));
      if (this.props.item in global.posts ){
          global.posts.splice(global.posts.indexOf(this.props.item),1);
      }
      await AsyncStorage.setItem('global:',JSON.stringify(global));
    };
    _DeletingProcess=()=>{
        Alert.alert(
            'Delete the post',
            'Are you sure?',
            [
                {text:'No',onPress:()=>{}},
                {text:'Yes',onPress:()=>{
                    this.props.userData.posts.splice(this.props.userData.posts.indexOf(this.props.data),1);
                    this.props.extraData.setState({userData:this.props.userData});
                    this._SaveData();
                    this._DeleteFromGlobal();
                    }},

            ],
            {cancelable:false}
        )
    };

    _isLikedPost=()=>{
        for(let elem of this.props.userData.notifications){
            if(elem.post === this.props.data.id){
                this.props.userData.notifications.splice(this.props.userData.notifications.indexOf(elem),1);
                break;
            }
        }
        for(let elem of this.props.userData.history){
            if(elem.post === this.props.data.id){
                this.props.userData.history.splice(this.props.userData.history.indexOf(elem),1);
                break;
            }
        }
        this.props.data.likes-=1;
        this.props.extraData.setState({userData:this.props.userData});
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
        this.props.userData.notifications.push(note.getObject());
        this.props.userData.history.push(note.getObject());
        this.props.data.likes+=1;
        this.props.extraData.setState({userData:this.props.userData});
        this._SaveData();
        this.setState({isLikedByCurrentUser:true});
    };
    render(){
        return(
            <View style={styles.PostUserContain}>
                <View style={styles.InfoUserContain}>
                    <Image style={styles.AvatarUserImage} source={{uri:this.props.userData.avatar}}/>
                    <View style={styles.InfoUserNickNameContain}>
                        <Text style={styles.InfoUserNickNameText}>
                            {this.props.userData.nickname}
                        </Text>
                    </View>
                    {( !this.props.isCurrentUser &&
                    <View style={styles.InfoIconJoinContain}>
                        <Image style={styles.InfoIconJoinImage} source={require('./materials/join.png')}/>
                    </View>)}
                    <View style={styles.InfoJoinContain}>
                        {(!this.props.isCurrentUser &&<Text style={styles.InfoJoinText}>
                            Join
                        </Text>)}
                        {(this.props.isDeletingPost &&
                                <TouchableHighlight onPress={this._DeletingProcess}>
                                    <Image style={{width:32,height:32}} source={require('./materials/close.png')}/>
                                </TouchableHighlight>
                        )}
                    </View>
                </View>
                <View style={styles.PostImageContain}>
                    <Image style={styles.PostImage} source={{uri:this.props.data.image}}/>
                </View>
                <View style={styles.PostBottomContain}>
                    <View style={styles.PostBottomLeftContain}>
                        <View>
                            {(this.state.isLikedByCurrentUser===false && <TouchableHighlight
                                style={styles.PostBottomLikeTouchable}
                                onPress={this._isNotLikedPost}
                            >
                                <Image style={styles.PostLikeIconImage} source={require('./materials/heart.png')}/>
                            </TouchableHighlight>)}
                            {(this.state.isLikedByCurrentUser===true && <TouchableHighlight
                                style={styles.PostBottomLikeTouchable}
                                onPress={this._isLikedPost}
                            >
                                <Image style={styles.PostLikeIconImage} source={require('./materials/hearton.png')}/>
                            </TouchableHighlight>)}
                        </View>
                        <View style={styles.PostBottomAmmoLikesContain}>
                            <Text style={styles.PostBottomAmmoLikesText}>
                                {this.props.data.likes}
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
}

AppRegistry.registerComponent('ImagePost',()=> ImagePost);