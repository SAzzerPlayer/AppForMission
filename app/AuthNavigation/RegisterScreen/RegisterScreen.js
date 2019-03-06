import React from 'react';
import {Alert,AsyncStorage,View,Text,TextInput,Image,ImageBackground,TouchableHighlight} from 'react-native';
import styles from './Styles';
import User from "../../classes/User";

export default class RegisterScreen extends React.Component{
    _SaveUser = async ()=>{
        try{
            let curUser = new User();
            curUser.nickname=this.state.nickname;
            curUser.password=this.state.password;
            curUser.email=this.state.email;
            await AsyncStorage.setItem('user:' + this.state.nickname, JSON.stringify(
                curUser.getObject()
                )
            );
        }
        catch{
            Alert.alert('Ooops!');
        }
    };
    // Сохраняет данные об текущей пользователе

    _SaveCurrentUser = async ()=>{
        try{
            let curUser = new User();
            curUser.nickname=this.state.nickname;
            curUser.password=this.state.password;
            curUser.email=this.state.email;
            await AsyncStorage.setItem('currentUser:',JSON.stringify(
                curUser.getObject()
            ));
        }
        catch{
            Alert.alert('Ooops!');
        }
    };
    // Операция создания пользователя
    CreateUser(params){
        let regName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;
        let regEmail= /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        if(params['nickname'].match(regName) ==null){
            Alert.alert('Invalid name format'+params['nickname']+'/');
        }
        else if(params['password'].match(regPass)==null){
            Alert.alert('Invalid password format')
        }
        else if(params['email'].match(regEmail)==null){
            Alert.alert('invalid E-mail address format')
        }
        else{
            if(params['password'] == params['rPassword']){
                this._SaveUser();
                this._SaveCurrentUser();
                Alert.alert('Successfull! Please,log in now.');
                this.props.navigation.navigate('Login');
            }
            else Alert.alert("Password isn't equaled with re-Password");
        }
    }
    constructor(props){
        super(props);
        this.CreateUser=this.CreateUser.bind(this);
        this.state = {nickname:'',password:'',rPassword:'',email:''};
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
                                        value={this.state.nickname}
                                        onChangeText={(pass)=>this.setState({nickname:pass})}
                                        placeholder={'Nickname...'}/>

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
                                    onPress={()=>{this.CreateUser(this.state);}}
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