import React from 'react';
import {Alert,AsyncStorage,View,Text,TextInput,Image,ImageBackground,TouchableHighlight} from 'react-native';
import styles from './Styles';
import User from "../../classes/User";

export default class RegisterScreen extends React.Component{

    // Операция создания пользователя
    _CreateUser(){
        let regName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;
        let regEmail= /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        if(this.state.username.match(regName) ==null){
            Alert.alert('Invalid name format'+params['nickname']+'/');
        }
        else if(this.state.password.match(regPass)==null){
            Alert.alert('Invalid password format')
        }
        else if(this.state.email.match(regEmail)==null){
            Alert.alert('invalid E-mail address format')
        }
        else{
            if(this.state.password === this.state.rPassword){
                this._PostData();
                Alert.alert('Successfull! Please,log in now.');
                this.props.navigation.navigate('Login');
            }
            else Alert.alert("Password isn't equaled with re-Password");
        }
    }
    _PostData = async () => {
         await fetch('http://10.0.2.2:3000/users/new', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            }),
        });
    };
    constructor(props){
        super(props);
        this._CreateUser=this._CreateUser.bind(this);
        this.state = {username:'',password:'',rPassword:'',email:''};
    }
    render(){
        return(
            <ImageBackground style={styles.Background} source={require('./materials/BackImageAuth.jpg')}>
                <View style={styles.TopNullContain}/>
                <View style={styles.MiddleContain}>
                    <View style={styles.LeftNullContain}/>
                    <View style={styles.FormMiddleContain}>
                        <View style={styles.TopMiddleContain}>
                            <TouchableHighlight
                                style={styles.ButtonBackTouch}
                                onPress={()=>{this.props.navigation.navigate('Login')}}
                            >
                                <Image style={styles.BackImage} source={require('./materials/back.png')}/>
                            </TouchableHighlight>
                            <Image style={styles.TopLogoImage} source={require('./materials/appicon.png')}/>
                            <View style={styles.TopMiddleNullContain}/>
                        </View>
                        <View style={styles.MainJoinContain}>
                            <View style={styles.JoinFormsContain}>
                                <View style={styles.MainInputContain}>
                                    <Image style={styles.MainInputImage} source={require('./materials/user.png')}/>
                                    <TextInput
                                        style={styles.MainInputText}
                                        value={this.state.username}
                                        onChangeText={(name)=>this.setState({username:name})}
                                        placeholder={'Username...'}/>

                                </View>
                                <View style={styles.MainInputContain}>
                                    <Image style={styles.MainInputImage} source={require('./materials/email.png')}/>
                                    <TextInput
                                        style={styles.MainInputText}
                                        value={this.state.email}
                                        onChangeText={(address)=>this.setState({email:address})}
                                        placeholder={'E-mail address...'}/>
                                </View>
                                <View style={styles.MainInputContain}>
                                    <Image style={styles.MainInputImage} source={require('./materials/password.png')}/>
                                    <TextInput
                                        style={styles.MainInputText}
                                        value={this.state.password}
                                        onChangeText={(pass)=>this.setState({password:pass})}
                                        placeholder={'Password...'}/>
                                </View>
                                <View style={styles.MainInputContain}>
                                    <Image style={styles.MainInputImage} source={require('./materials/password.png')}/>
                                    <TextInput
                                        style={styles.MainInputText}
                                        value={this.state.rPassword}
                                        onChangeText={(pass)=>this.setState({rPassword:pass})}
                                        placeholder={'Re-password...'}/>
                                </View>
                            </View>
                            <View style={styles.MiddleBottomContain}>
                                <TouchableHighlight
                                    style={styles.ButtonJoinTouch}
                                    onPress={this._CreateUser}
                                >
                                    <Text style={styles.ButtonJoinText}>Join</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={styles.RightNullContain}/>
                </View>
                <View style={styles.BottomNullContain}/>
            </ImageBackground>
        );
    }
}