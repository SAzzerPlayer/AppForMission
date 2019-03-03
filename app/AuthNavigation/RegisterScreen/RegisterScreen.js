import React from 'react';
import {Alert,AsyncStorage,View,Text,TextInput,Image,ImageBackground,TouchableHighlight} from 'react-native';
import styles from './Styles';
import User from "../../classes/User";

export default class RegisterScreen extends React.Component{
    _SaveUser = async ()=>{
        try{
            let newUser = new User(
                this.state.nickname,
                this.state.password,
                Array()
            );
            await AsyncStorage.setItem('user:' + this.state.nickname, JSON.stringify(
                newUser.getObject()
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
            let curUser = new User(
                this.state.nickname,
                this.state.password,
                Array());
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
        if(params['nickname'].match(regName) ==null){
            Alert.alert('Wrong view of name');
        }
        else if(params['nickname'].match(regPass)==null){
            Alert.alert('Wrong view of password')
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
        this.state = {nickname:'',password:'',rPassword:'',email:''};
        this.CreateUser=this.CreateUser.bind(this);
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
                                        placeholder={'Username...'}
                                        OnChangeText={(nick)=>this.setState({nickname:nick})}
                                        value={this.state.nickname}/>
                                </View>
                                <View style={styles.MainInputContain}>
                                    <Image style={styles.MainInputImage} source={require('./materials/email.png')}/>
                                    <TextInput
                                        style={styles.MainInputText}
                                        placeholder={'E-mail address...'}
                                        OnChangeText={(address)=>this.setState({email:address})}
                                        value={this.state.email}
                                    />
                                </View>
                                <View style={styles.MainInputContain}>
                                    <Image style={styles.MainInputImage} source={require('./materials/password.png')}/>
                                    <TextInput
                                        style={styles.MainInputText}
                                        placeholder={'Password...'}
                                        OnChangeText={(pass)=>this.setState({password:pass})}
                                        value={this.state.password}
                                    />
                                </View>
                                <View style={styles.MainInputContain}>
                                    <Image style={styles.MainInputImage} source={require('./materials/password.png')}/>
                                    <TextInput
                                        style={styles.MainInputText}
                                        placeholder={'Re-password...'}
                                        OnChangeText={(pass)=>this.setState({rPassword:pass})}
                                        value={this.state.rPassword}
                                    />
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