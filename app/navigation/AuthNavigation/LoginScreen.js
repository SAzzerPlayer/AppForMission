
import React, {Component} from 'react';
import {Alert,Text,View,Button,AsyncStorage,TextInput,ImageBackground} from 'react-native';
import {Divider} from 'react-native-elements';
import styles from './Styles';



export default class LoginScreen extends Component{

    //Поиск юзера в базе данных.Запоминание данных о текущем пользователе
    SearchUser = async () => {
        try{
            const value = JSON.parse(await AsyncStorage.getItem('user:'+this.state.nickname));
            if(value !== null && this.state.passwordReal == value['pass'] ) {
                Alert.alert('Successfull!');
                await AsyncStorage.mergeItem('currentUser:', JSON.stringify({
                        name:this.state.nickname,
                        pass:this.state.passwordReal
                    })
                );
                this.props.navigation.navigate('User');
            }
            else Alert.alert('Sorry, but you enter a wrong datas. Please repeat that.');
        }
        catch(error){
            Alert.alert('ooops'+error);
        }
    };
    // Операция валидности данных и входа в приложение
    Login_Confirm(){
        let nickname = this.state.nickname;
        let password = this.state.passwordReal;
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
        this.state={nickname:'', passwordFake:'',passwordReal:''};
        this.Login_Confirm=this.Login_Confirm.bind(this);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    source={require('./materials/BackImageAuth.jpg')}
                    style={{width:'100%', height: '100%'}}>
                <View style={styles.viewWelcome}>
                    <Text style={styles.textWelcome}>
                        Welcome to AppForMission!
                    </Text>
                    <Text style={styles.textInfo}>
                        Please log in our app:
                    </Text>
                </View>
                    <Divider style={styles.divider}/>
                <View style={{flex:1}}>
                    <Text style={styles.textInfo}>
                        Login:
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        placeHolder={"1"}
                        onChangeText={(nick)=>this.setState({nickname:nick})}
                        value={this.state.nickname}/>
                </View>
                    <Divider style={styles.divider}/>
                <View style={{flex:1}}>
                    <Text style={styles.textInfo}>
                        PassWord:
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        placeHolder={"1"}
                        onChangeText={
                            (password)=>this.setState({passwordReal:password})}
                        value={this.state.passwordReal}/>
                </View>
                    <Divider style={styles.divider}/>
                <View style={{flex:1}}>
                    <Button
                        style={styles.button}
                        onPress={this.Login_Confirm}
                        title="Login"
                    />
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.textInfo}>To join is:</Text>
                    <Button
                        style={styles.button}
                        onPress={()=>{
                            this.props.navigation.navigate('Register');
                        }}
                        title="Registration"
                    />
                </View>
                </ImageBackground>

            </View>
        );
    }
}