import React from 'react';
import {View,Text,ImageBackground,ScrollView,Image} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './LikesStyles';
export default class LikesScreen extends React.Component {

    static navigationOptions = {
        title: 'Likes'
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackground.jpg')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}
                    centerComponent={{text: 'Likes', style:{color:'#fff'}}}
                    rightComponent={{icon: 'content-paste', color:'#fff'}}
                />
                <View style={styles.border}>
                    <ScrollView style={styles.ScrollLikes}>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rowNotifyContain}>
                            <View style={styles.ImageContain}>
                                <Image style={styles.ImageInRow} />
                            </View>
                            <View style={styles.notifyRowContain}>
                                <Text style={styles.NotifyText}>
                                    'UserName''share' likes your post: "titlename" 'share'
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}