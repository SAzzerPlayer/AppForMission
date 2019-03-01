import React from 'react';
import {Alert,View,Text,ImageBackground,ScrollView,Image} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './WallStyles';

export default class WallScreen extends React.Component {

    static navigationOptions = {
        title: 'Wall'
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackground.jpg')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}
                    centerComponent={{text: 'Wall', style:{color:'#fff'}}}
                    //rightComponent={{icon: 'settings', color:'#fff'}}
                />
                <ScrollView style={styles.Scroll}>
                    <View style={styles.PostUserContain}>
                        <View style={styles.InfoUserContain}>
                            <Image style={styles.AvatarUserImage} />
                            <View style={styles.InfoUserNickNameContain}>
                                <Text style={styles.InfoUserNickNamText}>UserName</Text>
                            </View>
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} />
                            </View>
                            <View style={styles.InfoJoinContain}>
                                <Text style={styles.InfoJoinText}>Join/Is joined</Text>
                            </View>
                        </View>
                        <View style={styles.PostImageContain}>
                            <Image style={styles.PostImage} />
                        </View>
                        <View style={styles.PostLikeContain}>
                            <Image style={styles.PostLikeIconImage} />
                            <Text style={styles.PostLikeText}>
                                It's liked by 'quantite' peoples
                            </Text>
                        </View>
                    </View>
                    <View style={styles.PostUserContain}>
                        <View style={styles.InfoUserContain}>
                            <Image style={styles.AvatarUserImage} />
                            <View style={styles.InfoUserNickNameContain}>
                                <Text style={styles.InfoUserNickNamText}>UserName</Text>
                            </View>
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} />
                            </View>
                            <View style={styles.InfoJoinContain}>
                                <Text style={styles.InfoJoinText}>Join/Is joined</Text>
                            </View>
                        </View>
                        <View style={styles.PostImageContain}>
                            <Image style={styles.PostImage} />
                        </View>
                        <View style={styles.PostLikeContain}>
                            <Image style={styles.PostLikeIconImage} />
                            <Text style={styles.PostLikeText}>
                                It's liked by 'quantite' peoples
                            </Text>
                        </View>
                    </View>
                    <View style={styles.PostUserContain}>
                        <View style={styles.InfoUserContain}>
                            <Image style={styles.AvatarUserImage} />
                            <View style={styles.InfoUserNickNameContain}>
                                <Text style={styles.InfoUserNickNamText}>UserName</Text>
                            </View>
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} />
                            </View>
                            <View style={styles.InfoJoinContain}>
                                <Text style={styles.InfoJoinText}>Join/Is joined</Text>
                            </View>
                        </View>
                        <View style={styles.PostImageContain}>
                            <Image style={styles.PostImage} />
                        </View>
                        <View style={styles.PostLikeContain}>
                            <Image style={styles.PostLikeIconImage} />
                            <Text style={styles.PostLikeText}>
                                It's liked by 'quantite' peoples
                            </Text>
                        </View>
                    </View>
                    <View style={styles.PostUserContain}>
                        <View style={styles.InfoUserContain}>
                            <Image style={styles.AvatarUserImage} />
                            <View style={styles.InfoUserNickNameContain}>
                                <Text style={styles.InfoUserNickNamText}>UserName</Text>
                            </View>
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} />
                            </View>
                            <View style={styles.InfoJoinContain}>
                                <Text style={styles.InfoJoinText}>Join/Is joined</Text>
                            </View>
                        </View>
                        <View style={styles.PostImageContain}>
                            <Image style={styles.PostImage} />
                        </View>
                        <View style={styles.PostLikeContain}>
                            <Image style={styles.PostLikeIconImage} />
                            <Text style={styles.PostLikeText}>
                                It's liked by 'quantite' peoples
                            </Text>
                        </View>
                    </View>
                    <View style={styles.PostUserContain}>
                        <View style={styles.InfoUserContain}>
                            <Image style={styles.AvatarUserImage} />
                            <View style={styles.InfoUserNickNameContain}>
                                <Text style={styles.InfoUserNickNamText}>UserName</Text>
                            </View>
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} />
                            </View>
                            <View style={styles.InfoJoinContain}>
                                <Text style={styles.InfoJoinText}>Join/Is joined</Text>
                            </View>
                        </View>
                        <View style={styles.PostImageContain}>
                            <Image style={styles.PostImage} />
                        </View>
                        <View style={styles.PostLikeContain}>
                            <Image style={styles.PostLikeIconImage} />
                            <Text style={styles.PostLikeText}>
                                It's liked by 'quantite' peoples
                            </Text>
                        </View>
                    </View>
                    <View style={styles.PostUserContain}>
                        <View style={styles.InfoUserContain}>
                            <Image style={styles.AvatarUserImage} />
                            <View style={styles.InfoUserNickNameContain}>
                                <Text style={styles.InfoUserNickNamText}>UserName</Text>
                            </View>
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} />
                            </View>
                            <View style={styles.InfoJoinContain}>
                                <Text style={styles.InfoJoinText}>Join/Is joined</Text>
                            </View>
                        </View>
                        <View style={styles.PostImageContain}>
                            <Image style={styles.PostImage} />
                        </View>
                        <View style={styles.PostLikeContain}>
                            <Image style={styles.PostLikeIconImage} />
                            <Text style={styles.PostLikeText}>
                                It's liked by 'quantite' peoples
                            </Text>
                        </View>
                    </View>
                    <View style={styles.PostUserContain}>
                        <View style={styles.InfoUserContain}>
                            <Image style={styles.AvatarUserImage} />
                            <View style={styles.InfoUserNickNameContain}>
                                <Text style={styles.InfoUserNickNamText}>UserName</Text>
                            </View>
                            <View style={styles.InfoIconJoinContain}>
                                <Image style={styles.InfoIconJoinImage} />
                            </View>
                            <View style={styles.InfoJoinContain}>
                                <Text style={styles.InfoJoinText}>Join/Is joined</Text>
                            </View>
                        </View>
                        <View style={styles.PostImageContain}>
                            <Image style={styles.PostImage} />
                        </View>
                        <View style={styles.PostLikeContain}>
                            <Image style={styles.PostLikeIconImage} />
                            <Text style={styles.PostLikeText}>
                                It's liked by 'quantite' peoples
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                </ImageBackground>
        )
    }
}