import React from 'react';
import {AppRegistry,View,Text,Image,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './Styles';

export default class ImagePost extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.PostUserContain}>
                <View style={styles.InfoUserContain}>
                    <Image style={styles.AvatarUserImage} source={require('./materials/avatar.png')}/>
                    <View style={styles.InfoUserNickNameContain}>
                        <Text style={styles.InfoUserNickNameText}>
                            @UserName
                        </Text>
                    </View>
                    {( !this.props.isCurrentUser &&
                    <View style={styles.InfoIconJoinContain}>
                        <Image style={styles.InfoIconJoinImage} source={require('./materials/join.png')}/>
                    </View>)}
                    {(!this.props.isCurrentUser &&<View style={styles.InfoJoinContain}>
                        <Text style={styles.InfoJoinText}>
                            Join
                        </Text>
                    </View> )}
                </View>
                <View style={styles.PostImageContain}>
                    <Image style={styles.PostImage} source={require('./materials/image-2.jpg')}/>
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
                                947k likes
                            </Text>
                        </View>
                    </View>
                    <View style={styles.PostBottomRightContain}>
                        <TouchableWithoutFeedback style={styles.PostBottomRightTouch}>
                            <Text style={styles.PostBottomRightText}>
                                Something about this...
                            </Text>
                        </TouchableWithoutFeedback>

                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('ImagePost',()=> ImagePost);