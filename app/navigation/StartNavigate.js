import React,{Component} from 'react';
import {AsyncStorage,Alert,Button, View, Text,TextInput,StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';



class LoginScreen extends React.Component{
    
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
        else{
            //Проверка на наличие пользователя в базе
            this.SearchUser();

        }

    }
    constructor(props){
        super(props);
        this.state={nickname:'', passwordFake:'',passwordReal:''};
        this.Login_Confirm=this.Login_Confirm.bind(this);
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'grey'}}>
                <View style={logStyles.viewWelcome}>
                    <Text style={logStyles.textWelcome}>
                        Welcome to AppForMission!
                    </Text>
                    <Text style={logStyles.textInfo}>
                        Please log in our app:
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={logStyles.textInfo}>
                        Login:
                    </Text>
                    <TextInput
                    style={{height:40}}
                    placeHolder={"1"}
                    onChangeText={(nick)=>this.setState({nickname:nick})}
                    value={this.state.nickname}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={logStyles.textInfo}>
                        PassWord:
                    </Text>
                    <TextInput
                    style={{height:40}}
                    placeHolder={"1"}
                    onChangeText={(password)=>this.setState({passwordReal:password})}
                    value={this.state.passwordReal}/>
                </View>
                <View style={{flex:1}}>
                    <Button
                        style={logStyles.button}
                        onPress={this.Login_Confirm}
                        title="Login"
                    />
                </View>
                <View style={{flex:1}}>
                    <Text style={logStyles.textInfo}>To join is:</Text>
                    <Button
                        style={logStyles.button}
                        onPress={()=>{
                            this.props.navigation.navigate('Register');
                        }}
                        title="Registration"
                    />
                </View>

            </View>
        );
    }
}
class RegisterScreen extends React.Component{
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
            <View style={{flex:1, backgroundColor: 'grey'}}>
                <View style={logStyles.viewWelcome}>
                    <Text>For registration,please,confirm next fields:</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={logStyles.textInfo}>
                        NickName:
                    </Text>
                    <TextInput
                        style={{height:40, color:'white'}}
                        placeHolder={"1"}
                        onChangeText={(nick)=>this.setState({nickname:nick})}
                        value={this.state.nickname}/>
                </View>
                <View style={{flex:1, color:'white'}}>
                    <Text style={logStyles.textInfo}>
                        Password:
                    </Text>
                    <TextInput
                        style={{height:40,color:'white'}}
                        placeHolder={"1"}
                        onChangeText={(pass)=>this.setState({password:pass})}
                        value={this.state.password}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={logStyles.textInfo}>
                        Confirm passWord:
                    </Text>
                    <TextInput
                        style={{height:40}}
                        placeHolder={"1"}
                        onChangeText={(pass)=>this.setState({rPassword:pass})}
                        value={this.state.rPassword}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={logStyles.textInfo}>To join is:</Text>
                    <Button
                        style={logStyles.button}
                        onPress={()=>{
                            this.CreateUser(this.state);
                        }}
                        title="Create"
                    />
                </View>
            </View>
        );
    }
}
// Навигация экранов авторизации
const StartNavigate = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
    },
    {
        initialRouteName: 'Login'
    });


export default StartNavigate;

const logStyles = StyleSheet.create(
    {
        viewWelcome:{
            alignItems:'center',
            backgroundColor:'grey',
            flex: 1
        },
        button:{
            alignItems:'center',
            backgroundColor:'#8FBC8F'
        },
        textWelcome:{
            fontSize:20,
            color: "#F5F5F5"
        },
        textInfo: {
            fontSize: 12,
            color: "#F5F5F5"
        }
    }
);
const regStyles = StyleSheet.create(
    {

    }
);