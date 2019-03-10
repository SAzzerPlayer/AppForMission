import React from 'react';
import {Alert,AsyncStorage,View,ImageBackground,Image,Text,TextInput,TouchableHighlight} from 'react-native';
import User from '../../classes/User';
import styles from './Styles';

let object = {
    _getUserDatasApi: () => {
        // let data = fetch("http://10.0.2.2:3000/users?username=Daniel")
        //     .then((response)=>{
        //         response.json().then((data)=>{
        //             //let temp=JSON.parse(clone);
        //             return data;
        //             })
        //     });

        //Alert.alert(data.get('username'));
    },
    SearchUser: async () => {

        try {
            const value = JSON.parse(await AsyncStorage.getItem('user:' + this.state.nickname));
            if (value !== null && this.state.password == value['password']) {
                await AsyncStorage.mergeItem('currentUser:', JSON.stringify(value)
                );
                //Alert.alert(value.nickname);
                this._getUserDatasApi();
                this.props.navigation.navigate('User');
            }
            else Alert.alert('Sorry, but you enter a wrong datas. Please repeat that.');
        }
        catch (error) {
            Alert.alert('Ooops ' + error);
        }
    },
};
// Операция валидности данных и входа в приложение

export default class LoginScreen extends React.Component{
    _GetUserData = async () =>{
        let data = Object();
        await fetch("http://10.0.2.2:3000/users?username="+this.state.username)
            .then((response)=>{ return response.json().then((responseJson)=>{
                data=responseJson;
            })})
            .catch((error)=>{
                Alert.alert("Ooops "+error);
                return false;
            });
        return data;
    };
    _CheckUser= async ()=>{
        let data = await this._GetUserData();
        if(data===false){
            Alert.alert("Wrong datas!");
        }
        else{
            if(data.password === this.state.password){
                Alert.alert("Successfull");
                await AsyncStorage.setItem('currentUser:',JSON.stringify(data));
                this.props.navigation.navigate('User');
            }
            else Alert.alert("Wrong datas!");
        }
    };
    _LoginConfirm=()=>{
        let username = this.state.username;
        let password = this.state.password;
        let regName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;
        if(username.match(regName)==null){
            Alert.alert('Invalid name format');
        }
        else if(password.match(regPass)==null){
            Alert.alert('Invalid password format');
        }
        else this._CheckUser();
        };
    constructor(props){
        super(props);
        this.state={username:'', password:''};
        this._LoginConfirm=this._LoginConfirm.bind(this);
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
                                               value={this.state.username}
                                               placeholder={'Username...'}
                                               onChangeText={(nick)=>this.setState({username:nick})}/>
                                </View>
                                <View style={styles.PasswordInputContain}>
                                    <Image style={styles.PasswordInputImage} source={require('./materials/password.png')}/>
                                    <TextInput style={styles.PasswordInputText}
                                               value={this.state.password}
                                               onChangeText={(pass)=>this.setState({password:pass})}
                                    placeholder={'Password...'}/>
                                </View>
                                <TouchableHighlight style={styles.LoginConfirmButtonTouch} onPress={this._LoginConfirm}>
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