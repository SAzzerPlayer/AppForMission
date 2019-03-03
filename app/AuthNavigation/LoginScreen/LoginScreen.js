import React from 'react';
import {Alert,AsyncStorage,View,ImageBackground,Image,Text,TextInput,TouchableHighlight} from 'react-native';
import User from '../../classes/User';
import styles from './Styles';

export default class LoginScreen extends React.Component{
    SearchUser = async () => {
        try{
            const value = JSON.parse(await AsyncStorage.getItem('user:'+this.state.nickname));
            if(value !== null && this.state.password == value['pass'] ) {
                Alert.alert('Successfull!');
                let logUser= new User(
                    value['nickname'],
                    value['password'],
                    value['posts']
                );
                await AsyncStorage.mergeItem('currentUser:', JSON.stringify(
                    logUser.getObject()
                    )
                );
                this.props.navigation.navigate('User');
            }
            else Alert.alert('Sorry, but you enter a wrong datas. Please repeat that.');
        }
        catch(error){
            Alert.alert('Ooops '+error);
        }
    };
    // Операция валидности данных и входа в приложение
    Login_Confirm(){
        let nickname = this.state.nickname;
        let password = this.state.password;
        let regName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;

        if(nickname.match(regName)==null){
            Alert.alert('Недопустимый формат имени');
        }
        else if(password.match(regPass)==null){
            Alert.alert('Недопустимый формат пароля');
        }
        else this.SearchUser();

    }
    constructor(props){
        super(props);
        this.state={nickname:'', password:''};
        this.Login_Confirm=this.Login_Confirm.bind(this);
    }
    render(){
        return(
            <ImageBackground style={styles.Background} source={require('./materials/BackImageAuth.jpg')}>

                <View style={styles.TopNullContain}/>
                <View style={styles.MiddleContain}>
                    <View style={styles.LeftNullContain}/>

                    <View style={styles.FormMiddleContain}>
                        <View style={styles.TopLoginContain}>
                            <Image style={styles.TopLogoImage} source={require('./materials/appicon.png')}/>
                        </View>
                        <View style={styles.MainLoginContain}>
                            <View style={styles.LoginFormsContain}>
                                <View style={styles.LoginInputContain}>
                                    <Image style={styles.LoginInputImage} source={require('./materials/user.png')}/>
                                    <TextInput style={styles.LoginInputText}
                                               value={this.state.nickname}
                                               placeholder={'Username...'}
                                               onChangeText={(nick)=>this.setState({nickname:nick})}/>
                                </View>
                                <View style={styles.PasswordInputContain}>
                                    <Image style={styles.PasswordInputImage} source={require('./materials/password.png')}/>
                                    <TextInput style={styles.PasswordInputText}
                                               value={this.state.password}
                                               onChangeText={(pass)=>this.setState({password:pass})}
                                    placeholder={'Password...'}/>
                                </View>
                                <TouchableHighlight style={styles.LoginConfirmButtonTouch} onPress={this.Login_Confirm}>
                                    <Text style={styles.LoginConfirmButtonText}>Sign in</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.ToJoinFormsContain}>
                                <View style={styles.LoginTextORContain}>
                                    <View style={styles.LoginOrImageContain}>
                                    <Text style={styles.LoginOrText}>OR</Text>
                                    </View>
                                </View>
                                <Text style={styles.LoginText}>If you haven't account in our app</Text>
                                <TouchableHighlight style={styles.LoginConfirmButtonTouch}
                                onPress={()=> {this.props.navigation.navigate('Register')}}>
                                    <Text style={styles.LoginConfirmButtonText}>Join us</Text>
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