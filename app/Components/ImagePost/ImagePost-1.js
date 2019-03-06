import React from 'react';
import {Alert,AsyncStorage,AppRegistry,View,Text,Image,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './Styles';

export default class ImagePost extends React.Component{
    constructor(props){
        super(props);
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
    _DeletingProcess=()=>{
        Alert.alert(
            'Delete the post',
            'Are you sure?',
            [
                {text:'No',onPress:()=>{}},
                {text:'Yes',onPress:()=>{
                    this.props.userData.posts.splice(this.props.index,1);
                    this.props.extraData.setState({userData:this.props.userData});
                    this._SaveData();
                    }},

            ],
            {cancelable:false}
        )
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
                            <TouchableHighlight style={styles.PostBottomLikeTouchable}>
                                <Image style={styles.PostLikeIconImage} source={require('./materials/heart.png')}/>
                            </TouchableHighlight>
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