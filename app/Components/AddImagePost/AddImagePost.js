import React from 'react';
import {AsyncStorage,Alert,View,Image,Text,TextInput,TouchableHighlight} from 'react-native';
import {Overlay} from 'react-native-elements';
import Post from '../../classes/Post';
import styles from './Styles';
export default class AddImagePost extends React.Component{

    _PostDataAddImage = async (url,text) => {
        await fetch('http://10.0.2.2:3000/posts/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.props.userData.username,
                image: url,
                text: text
            }),
        });
    };
    _CheckInputsField(){
        let regURL = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
        if(this.state.url.match(regURL)==null){
            Alert.alert('Invalid url format!');
        }
        else{
            this._PostDataAddImage(this.state.url,this.state.text);
            this.props.prevComp.setState({isAddingPost:false});
        }
    }
    constructor(props){
        super(props); //UserData
        this._CheckInputsField=this._CheckInputsField.bind(this);
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