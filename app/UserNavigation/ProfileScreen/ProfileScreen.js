import React from 'react';
import {View,Text,ImageBackground,ScrollView,Image,TouchableHighlight,Switch} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import styles from './ProfileStyles';





export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile'
    };

    render(){
        return(
            <ImageBackground
                source={require('../materials/UserBackgroundThird.png')}
                style={{width:'100%', height: '100%'}}>
                <Header
                    leftComponent={{icon: 'menu',color:'#fff'}}

                    centerComponent={{text: 'Profile', style:{color:'#fff'}}}
                    rightComponent={{icon: 'settings', color:'#fff'}}
                    />
                <View style={styles.ProfUserContain}>
                    <View style={styles.AvatarContain}>
                        <Image style={styles.AvatarImage} source={require('./materials/avatar.png')}/>
                    </View>
                    <View style={styles.InfoUserContain}>
                        <View style={styles.NickUserContain}>
                            <View style={styles.IconContain}>
                                <Icon name={'verified-user'}/>
                            </View>
                            <View style={styles.NickNameContain}>
                                <Text style={styles.NickNameText}>@Username</Text>
                            </View>
                            <View style={styles.EditProfileContain}>
                                <Image style={styles.EditProfileImage} source={require('./materials/edit.png')}/>
                            </View>
                        </View>
                        <View style={styles.StatisticsUserContain}>
                            <TouchableHighlight style={styles.TouchStatics}>
                                <Text style={styles.StaticsUserText}>
                                    Followers: 'quantity'
                                    Subscribers: 'quantity'</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={styles.ToolPostContain}>
                    <View style={styles.ToolPostLeftContain}>
                        <View style={styles.ToolPostEditContain}>
                            <Image style={styles.ToolPostEditImage} source={require('./materials/add.png')}/>
                            <Text style={styles.ToolPostEditText}>Add post</Text>
                        </View>
                        <View style={styles.ToolPostDeleteContain}>
                            <Image style={styles.ToolPostDeleteImage} source={require('./materials/delete1.png')}/>
                            <Text style={styles.ToolPostDeleteText}>Delete post</Text>
                        </View>
                    </View>
                    <View style={styles.ToolPostVertDelimit}/>
                    <View style={styles.ToolPostRightContain}>
                        <Image style={styles.ToolPostViewModeImage} source={require('./materials/multiplyRow.png')}/>
                        <Switch/>
                    </View>
                </View>
                <View style={styles.PostsContain}>
                    <ScrollView style={styles.ScrollPosts}>
                        <View style={styles.MultiplyRowPostsContain}>
                            <Image style={styles.ShortPostImage} source={require('./materials/image.jpg')}/>
                            <Image style={styles.ShortPostImage} source={require('./materials/image.jpg')}/>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}

//<Image style={styles.ToolPostViewModeSwitch} source={require('./materials/switch.png')}/>