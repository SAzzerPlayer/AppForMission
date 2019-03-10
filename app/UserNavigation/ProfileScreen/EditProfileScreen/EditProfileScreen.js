import React from 'react';
import {View,Text,ScrollView,Image,ImageBackground,TouchableHighlight,TextInput,AsyncStorage,Alert} from 'react-native';
import Loading from '../../../Components/Loading/Loading-2'
import styles from './Styles';

export default class EditProfileScreen extends React.Component{
    static navigationOptions = {
        title:'EditProfile'
    };
    _LoadData = async () => {
        let tempData = JSON.parse(await AsyncStorage.getItem('currentUser:'));
        this.setState({userData:tempData, isLoaded:true});
    };
    _UpdateUserData = async () => {
            let data = Object();
            await fetch("http://10.0.2.2:3000/users?username="+this.state.userData.username)
                .then((response)=>{ return response.json().then((responseJson)=>{
                    data=responseJson;
                })})
                .catch((error)=>{
                    Alert.alert("Ooops "+error);
                    return false;
                });
            this.setState({userData:data});
            await AsyncStorage.setItem("currentUser:",JSON.stringify(data));
    };
    _PostDataAvatar = async () => {
        await fetch('http://10.0.2.2:3000/users/change', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.userData.username,
                avatar: this.state.url
            }),
        });
    };
    _CheckURL = ()=>{
        let regURL = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
        if(this.state.url.match(regURL)==null){
            Alert.alert('Invalid type of url!');
        }
        else {
            this._PostDataAvatar();
            this._UpdateUserData();
        }
    };
    _PostDataEmail = async () => {
        await fetch('http://10.0.2.2:3000/users/change', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.userData.username,
                email: this.state.email
            }),
        });
    };
    _CheckEmail= async () => {
        let regEmail= /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        if(this.state.email.match(regEmail)==null){
            Alert.alert('Invalid type of email!');
        }
        else {
            this._PostDataEmail();
            this._UpdateUserData();
        }
    };
    _PostDataPassword= async () => {
        await fetch('http://10.0.2.2:3000/users/new', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.userData.username,
                password: this.state.password,
            }),
        });
    };
    _CheckPassword=()=>{
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;
        if(
            this.state.oldPass.match(regPass)==null ||
            this.state.newPass.match(regPass)==null ||
            this.state.reNewPass.match(regPass)==null
        ){
            Alert.alert('Invalid type of password!');
        }
        else{
            if(this.state.oldPass !== this.state.userData.password){
                Alert.alert('Wrong old password!');
            }
            else{
                this._PostDataPassword();
                this._UpdateUserData();
            }
        }
    };
    constructor(props){
        super(props);
        this.state={
            userData:'',
            isLoaded:false,isAvatarChanging:false,isEmailChanging:false,isPasswordChanging:false,
            email:'',
            url:'',
            oldPass:'',
            newPass:'',
            reNewPass:''
        };
        this._LoadData = this._LoadData.bind(this);
        this._UpdateUserData = this._UpdateUserData.bind(this);
        this._LoadData();
    }
    render(){
            if(!this.state.isLoaded){
                return (
                    <Loading/>
                );
            }
            else{
                return(
                    <ImageBackground style={{flex: 1}} source={require('./materials/UserBackgroundThird.png')}>
                        <View style={{ flex: 1, maxHeight: 32}}/>
                        <ScrollView style={{flex: 9, margin: 10}}>
                            {(!this.state.isAvatarChanging &&<View style={styles.OneBordStyle}>
                                <Image style={styles.Avatar} source={{uri:this.state.userData.avatar}}/>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: `center`,
                                        justifyContent: `center`
                                    }}
                                >
                                    <TouchableHighlight onPress={()=>{this.setState({isAvatarChanging:true})}}>
                                        <Text style={styles.TextStyle1}>
                                            Change avatar image...
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View> )}
                            {(this.state.isAvatarChanging && <View style={styles.OneBordStyle}>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: `center`,
                                        justifyContent: `space-around`,
                                        flexDirection: `row`
                                    }}
                                >
                                    <TextInput
                                        style={styles.TextInputStyle}
                                        placeholder={`URL-link...`}
                                        onChangeText={(text)=>{this.setState({url:text})}}
                                        value={this.state.url}
                                    />
                                    <TouchableHighlight
                                        style={{
                                            alignItems: `center`,
                                            justifyContent: `center`
                                        }}
                                        onPress={()=>{
                                            this._CheckURL();
                                            this.setState({isAvatarChanging:false})
                                        }}
                                    >
                                        <Text style={styles.TextStylePress} >
                                            OK
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View> )}
                            {(!this.state.isEmailChanging && <View
                                style={styles.OneBordStyle}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: `center`,
                                        justifyContent: `space-between`,
                                        flexDirection: `row`
                                    }}
                                >
                                    <View style={{flex: 1}}>
                                        <Text style={{marginLeft: 15, fontSize: 16}}>
                                            Email: {this.state.userData.email}
                                        </Text>
                                    </View>
                                    <TouchableHighlight onPress={()=>{this.setState({isEmailChanging:true})}}>
                                        <Text style={styles.TextStyleChange}>
                                            Change...
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>)}
                            {(this.state.isEmailChanging && <View style={styles.OneBordStyle}>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: `center`,
                                        justifyContent: `space-around`,
                                        flexDirection: `row`
                                    }}
                                >
                                    <TextInput
                                        style={styles.TextInputStyle}
                                        placeholder={`Email...`}
                                        onChangeText={(text)=>{this.setState({email:text})}}
                                        value={this.state.email}
                                    />
                                    <TouchableHighlight
                                        style={{alignItems: `center`, justifyContent: `center`}}
                                        onPress={()=>{
                                            this._CheckEmail();
                                            this.setState({isEmailChanging:false})
                                        }}
                                    >
                                        <Text style={styles.TextStylePress}>
                                            OK
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>)}
                            {(!this.state.isPasswordChanging && <View style={styles.SecondBordStyle}>
                                <TouchableHighlight onPress={()=>{this.setState({isPasswordChanging:true})}}>
                                    <Text style={styles.TextStyleChange}>
                                        Change password...
                                    </Text>
                                </TouchableHighlight>
                            </View>)}
                            {(this.state.isPasswordChanging && <View style={styles.SecondBordStyle}>
                                <TouchableHighlight onPress={()=>{this.setState({isPasswordChanging:false})}}>
                                    <Text style={styles.TextStyleChange}>
                                        Cancel
                                    </Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={()=>{
                                    this._CheckPassword();
                                    this.setState({isPasswordChanging:false})
                                }}>
                                    <Text style={styles.TextStyleChange}>
                                        OK
                                    </Text>
                                </TouchableHighlight>
                            </View>)}
                            {(this.state.isPasswordChanging && <View style={styles.OneBordStyle}>
                                <View style={{
                                        flex: 1,
                                        alignItems: `center`,
                                        justifyContent: `space-around`,
                                        flexDirection: `row`
                                    }}
                                >
                                    <TextInput
                                        placeholder={`Old password...`}
                                        style={styles.TextInputStyle}
                                        onChangeText={(text)=>{this.setState({oldPass:text})}}
                                        value={this.state.oldPass}
                                    />
                                </View>
                            </View>)}
                            {(this.state.isPasswordChanging && <View style={styles.OneBordStyle}>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: `center`,
                                        justifyContent: `space-around`,
                                        flexDirection: `row`
                                    }}
                                >
                                    <TextInput
                                        style={styles.TextInputStyle}
                                        placeholder={`New password...`}
                                        onChangeText={(text)=>{this.setState({newPass:text})}}
                                        value={this.state.newPass}
                                    />
                                </View>
                            </View>)}
                            {(this.state.isPasswordChanging && <View style={styles.OneBordStyle}>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: `center`,
                                        justifyContent: `space-around`,
                                        flexDirection: `row`
                                    }}
                                >
                                    <TextInput
                                        style={styles.TextInputStyle}
                                        placeholder={`Repeat new password...`}
                                        onChangeText={(text)=>{this.setState({reNewPass:text})}}
                                        value={this.state.reNewPass}
                                    />
                                </View>
                            </View>)}
                        </ScrollView>
                    </ImageBackground>
                );
            }
    }
}