import React,{Component} from 'react';
import {Alert,View,Text,TextInput,AsyncStorage, ImageBackground} from 'react-native';
import {Button, ThemeProvider,Divider} from 'react-native-elements';
import styles from './Styles';
import theme from './Theme';

export default class RegisterScreen extends Component{
    //Сохранить пользователя в базу данных
    _SaveUser = async ()=>{
        try{
            await AsyncStorage.setItem('user:'+this.state.nickname,JSON.stringify({
                name:this.state.nickname,
                pass:this.state.password}));
        }
        catch{
            Alert.alert('Ooops!');
        }
    };
    // Сохраняет данные об текущей пользователе

    _SaveCurrentUser = async ()=>{
        try{
            await AsyncStorage.setItem('currentUser:',JSON.stringify({
                name:this.state.nickname,
                pass:this.state.password}));
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
                //AsyncStorage.setItem('user:'+params['nickname'],params['password']);
                //AsyncStorage.setItem('currentUser',params['nickname']);
                Alert.alert('Successfull! Please,log in now.');
                this.props.navigation.navigate('Login');
            }
            else Alert.alert("Password isn't equaled with re-Password");
        }
    }

    constructor(props){
        super(props);
        this.state = {nickname:'',password:'',rPassword:''};
        this.CreateUser=this.CreateUser.bind(this);
    }
    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground
                    source={require('./materials/BackImageAuth.jpg')}
                    style={{width:'100%', height: '100%'}}>
                <View style={styles.viewWelcome}>
                    <Text style={styles.textWelcome}>For registration,please,confirm next fields:</Text>
                </View>
                    <View style={{
                        flex:3
                    }}>
                        <Divider style={styles.divider}/>
                <View style={{flex:1}}>
                    <Text style={styles.textInfo}>
                        NickName:
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        placeHolder={"1"}
                        onChangeText={(nick)=>this.setState({nickname:nick})}
                        value={this.state.nickname}/>
                </View>
                        <Divider style={styles.divider}/>
                <View style={{flex:1, color:'white'}}>
                    <Text style={styles.textInfo}>
                        Password:
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        placeHolder={"1"}
                        onChangeText={(pass)=>this.setState({password:pass})}
                        value={this.state.password}/>
                </View>
                        <Divider style={styles.divider}/>
                <View style={{flex:1}}>
                    <Text style={styles.textInfo}>
                        Confirm passWord:
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        placeHolder={"1"}
                        onChangeText={(pass)=>this.setState({rPassword:pass})}
                        value={this.state.rPassword}/>
                </View>
                        <Divider style={styles.divider}/>
                    </View>
                <View style={{flex:2}}>
                    <Text style={styles.textInfo}>To join us:</Text>
                    <ThemeProvider theme={theme}>
                        <Button
                        style={styles.button}
                        onPress={()=>{
                            this.CreateUser(this.state);
                        }}
                        title="Create"
                        />
                    </ThemeProvider>
                </View>
                </ImageBackground>
            </View>
        );
    }
}