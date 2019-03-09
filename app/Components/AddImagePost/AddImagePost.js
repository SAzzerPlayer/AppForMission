import React from 'react';
import {AsyncStorage,Alert,View,Image,Text,TextInput,TouchableHighlight} from 'react-native';
import {Overlay} from 'react-native-elements';
import Post from '../../classes/Post';
import styles from './Styles';
export default class AddImagePost extends React.Component{
    _AddPost = async () =>{
        let post = new Post();
        post.image=this.state.url;
        post.text=this.state.text;
        post.user=this.props.userData.nickname;
        post.likes=0;
        post.id=Date.now();
        this.props.userData.posts.push(post.getObject());
        try{
            await AsyncStorage.setItem('user:'+this.props.userData.nickname,
            JSON.stringify(this.props.userData));
            await AsyncStorage.setItem('currentUser:',JSON.stringify(this.props.userData));
            let global = JSON.parse(await AsyncStorage.getItem('global:'));
            if(global==null){
                global={posts:[]};
            }
            else if(global.posts === undefined){
                global.posts=Array();
            }
            global['posts'].push(post.getObject());
            await AsyncStorage.setItem('global:',JSON.stringify(global));
        }
        catch(exception){
            Alert.alert('Wrong save post! ' + exception)
        }
    };
    _CheckInputsField(){
        let regURL = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
        if(this.state.url.match(regURL)==null){
            Alert.alert('Invalid url format!');
        }
        else{
            this._AddPost();
            this.props.prevComp.setState({isAddingPost:false});
        }
    }
    constructor(props){
        super(props); //UserData
        this.state={url:'',text:''};
    }

    render(){
        return(
            <View style={styles.Background}>
                <View style={styles.TitleContain}>
                    <View style={styles.TitleNullContain}/>
                    <Text style={styles.TextTitle}>Adding a new post</Text>
                    <TouchableHighlight
                        style={styles.TitleCloseTouch}
                        onPress={()=>{
                            this.props.prevComp.setState({isAddingPost:false});
                        }}
                    >
                        <Image style={styles.TitleCloseImage} source={require('./materials/close.png')}/>
                    </TouchableHighlight>
                </View>
                <Text style={styles.TextSecondTitle}>URL link of photo:</Text>
                <View style={styles.TextInputContain}>
                    <TextInput
                        style={styles.TextInput}
                        value={this.state.url}
                        onChangeText={(url)=>{this.setState({url:url})}}
                    />
                </View>
                <Text style={styles.TextSecondTitle}>Description:</Text>
                <View style={styles.TextInputContain}>
                    <TextInput
                        style={styles.TextInput}
                        value={this.state.text}
                        onChangeText={(text)=>{this.setState({text:text})}}
                    />
                </View>
                <TouchableHighlight
                    style={styles.AddTouch}
                    onPress={()=>{this._CheckInputsField()}}
                >
                    <Text style={styles.AddText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}