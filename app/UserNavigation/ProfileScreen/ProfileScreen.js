import React from 'react';
import {AsyncStorage,View,Text,ImageBackground,ScrollView,Image,TouchableHighlight,Switch} from 'react-native';
import {Header,Icon,Overlay} from 'react-native-elements';
import ColumnListPosts from './iterators/OncePostOnRow/ColumnListPosts';
import TwiceColumnListPost from './iterators/TwicePostOnRow/TwiceColumnListPost';
import Loading2 from '../../Components/Loading/Loading-2';
import styles from './ProfileStyles';
import AddImagePost from "../../Components/AddImagePost/AddImagePost";





export default class ProfileScreen extends React.Component {
    static navigationOptions={
        title:'Profile',
        header:null
    };
    _LoadUserData=async()=>{
        let temp=JSON.parse(await AsyncStorage.getItem('currentUser:'));
        this.setState({userData:temp,isLoaded:true,isAddingPost:false});
        return temp;
    };
    constructor(props){
        super(props);
        this.state = { userData:{},isMultiplyPosts:false,isLoaded:false,isDeletingPost:false};
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
                                        Subscribers: {this.state.userData.subscribe.length} {"   "}
                                        {this.state.userData.posts.length}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ToolPostContain}>
                        <View style={styles.ToolPostLeftContain}>
                            <View style={styles.ToolPostEditContain}>
                                <Image style={styles.ToolPostEditImage} source={require('./materials/add.png')}/>
                                <TouchableHighlight onPress={()=>{this.setState({isAddingPost:true})}}>
                                    <Text style={styles.ToolPostEditText}>Add post</Text>
                                </TouchableHighlight>
                                <Overlay isVisible={this.state.isAddingPost}>
                                    <AddImagePost userData={this.state.userData} prevComp={this}/>
                                </Overlay>
                            </View>
                            <View style={styles.ToolPostDeleteContain}>
                                {(!this.state.isDeletingPost && <Image style={styles.ToolPostDeleteImage} source={require('./materials/delete_off.png')}/>)}
                                {(this.state.isDeletingPost && <Image style={styles.ToolPostDeleteImage} source={require('./materials/delete_on.png')}/>)}
                                <TouchableHighlight onPress={()=>{this.setState({isDeletingPost:!this.state.isDeletingPost, userData:this.state.userData})}}>
                                <Text style={styles.ToolPostDeleteText}>Delete post</Text>
                                </TouchableHighlight>
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
                            {(!this.state.isMultiplyPosts&& <ColumnListPosts userData={this.state.userData} deletingMode={this.state.isDeletingPost} extraData={this}/>)}
                            {(this.state.isMultiplyPosts&& <TwiceColumnListPost userData={this.state.userData}/> )}
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
{/*<OncePostOnRow userPosts={this.state.userData.posts}/>*/}
{/*<View style={styles.MultiplyRowPostsContain}>*/}

{/*</View>*/}
{/*<Image style={styles.ShortPostImage} source={require('./materials/image.jpg')}/>*/}
{/*<Image style={styles.ShortPostImage} source={require('./materials/image.jpg')}/>*/}
//<Image style={styles.ToolPostViewModeSwitch} source={require('./materials/switch.png')}/

{/*<View style={styles.ToolPostEditContain}>*/}
    {/*<Image style={styles.ToolPostEditImage} source={require('./materials/add.png')}/>*/}
    {/*<Text style={styles.ToolPostEditText}>Add post</Text>*/}
{/*</View>*/}