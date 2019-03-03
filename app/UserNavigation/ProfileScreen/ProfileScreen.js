import React from 'react';
import {AsyncStorage,Alert,View,Text,ImageBackground,ScrollView,Image,TouchableHighlight,Switch} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import OncePostOnRow from './iterators/OncePostOnRow/OncePostOnRow';
import TwicePostOnRow from './iterators/TwicePostOnRow/TwicePostOnRow';
import Loading2 from '../../Components/Loading/Loading-2';
import styles from './ProfileStyles';





export default class ProfileScreen extends React.Component {

    _LoadUserData=async()=>{
        let temp=JSON.parse(await AsyncStorage.getItem('currentUser:'));
        this.setState({userData:temp,isLoaded:true});
        return temp;
    };
    constructor(props){
        super(props);
        this.state = { userData:{},isMultiplyPosts:false,isLoaded:false};
        this._LoadUserData = this._LoadUserData.bind(this);
        this._LoadUserData();
    }

    render(){
        if(this.state.isLoaded) {
            return (
                <ImageBackground
                    source={require('../materials/UserBackgroundThird.png')}
                    style={{width: '100%', height: '100%'}}>
                    <Header
                        leftComponent={{icon: 'menu', color: '#fff'}}

                        centerComponent={{text: 'Profile', style: {color: '#fff'}}}
                        rightComponent={{icon: 'settings', color: '#fff'}}
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
                                    <Text style={styles.NickNameText}>{this.state.userData['nickname']}</Text>
                                </View>
                                <View style={styles.EditProfileContain}>
                                    <Image style={styles.EditProfileImage} source={require('./materials/edit.png')}/>
                                </View>
                            </View>
                            <View style={styles.StatisticsUserContain}>
                                <TouchableHighlight style={styles.TouchStatics}>
                                    <Text style={styles.StaticsUserText}>
                                        Followers: {this.state.userData.subscribers.length} {"\n"}
                                        Subscribers: {this.state.userData.subscribe.length}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ToolPostContain}>
                        <View style={styles.ToolPostLeftContain}>
                            <View style={styles.ToolPostEditContain}>
                                <Image style={styles.ToolPostEditImage} source={require('./materials/edit.png')}/>
                                <Text style={styles.ToolPostEditText}>Add post</Text>
                            </View>
                            <View style={styles.ToolPostDeleteContain}>
                                <Image style={styles.ToolPostDeleteImage} source={require('./materials/delete1.png')}/>
                                <Text style={styles.ToolPostDeleteText}>Delete post</Text>
                            </View>
                        </View>
                        <View style={styles.ToolPostVertDelimit}/>
                        <View style={styles.ToolPostRightContain}>
                            <Image style={styles.ToolPostViewModeImage}
                                   source={require('./materials/multiplyRow.png')}/>
                            <Switch
                                onValueChange={(boolean) => {
                                    this.setState({isMultiplyPosts: boolean})
                                }}
                                value={this.state.isMultiplyPosts}
                            />
                        </View>
                    </View>
                    <View style={styles.PostsContain}>
                        <ScrollView style={styles.ScrollPosts}>
                            <OncePostOnRow userPosts={this.state.userData.posts}/>
                        </ScrollView>
                    </View>
                </ImageBackground>
            )
        }
        else{
            return(
                <Loading2/>
            );
        }
    }
}
{/*<View style={styles.MultiplyRowPostsContain}>*/}

{/*</View>*/}
{/*<Image style={styles.ShortPostImage} source={require('./materials/image.jpg')}/>*/}
{/*<Image style={styles.ShortPostImage} source={require('./materials/image.jpg')}/>*/}
//<Image style={styles.ToolPostViewModeSwitch} source={require('./materials/switch.png')}/>