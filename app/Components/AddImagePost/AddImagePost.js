import React from 'react';
import {Platform,Alert,View,Image,Text,TextInput,TouchableHighlight} from 'react-native';
import {Overlay} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import styles from './Styles';

const createFormData = (photo, body) => {
    const data = new FormData();

    data.append("photo", {
        name: photo.fileName,
        type: photo.type,
        uri:
            Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
};
export default class AddImagePost extends React.Component{

    handleUploadPhoto = () => {
        fetch("http://10.0.2.2:3000/image/upload", {
            method: "POST",
            body: createFormData(this.state.photo, { username:this.props.userData.username })
        })
            .then(response => response.json())
            .then(response => {
                console.log("upload success", response);
                alert("Upload success!");
                this.setState({ photo: null });
            })
            .catch(error => {
                console.log("upload error", error);
                alert("Upload failed!");
            });
    };
    handleChoosePhoto = () => {
        const options={noData:true};
        ImagePicker.launchImageLibrary(options,response => {
            if(response.uri){
                Alert.alert(response.uri);
                this.setState({photo:response,url:response});
                this.handleUploadPhoto();
            }
        })
    };

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
        //let regURL = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
        //if(this.state.url.match(regURL)==null){
        //    Alert.alert('Invalid url format!');
        //}
        //else{
            this._PostDataAddImage(this.state.url,this.state.text);
            this.props.prevComp.setState({isAddingPost:false});
        //}
    }
    constructor(props){
        super(props); //UserData
        this._CheckInputsField=this._CheckInputsField.bind(this);
        this.state={url:'',text:'',photo:null};
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
                <View style={{maxHeight:48,justifyContent: `center`,
                    flexDirection: `column`}}>
                    <Text style={styles.TextSecondTitle}>URL link of photo:</Text>
                    <TouchableHighlight onPress={this.handleChoosePhoto}>
                        <Image style={{height:32,width:32}} source={require('./materials/gallery.png')}/>
                    </TouchableHighlight>
                </View>
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