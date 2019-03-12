import React from 'react';
import {AsyncStorage,Alert,View,Text,ImageBackground,ScrollView,Image,FlatList} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './LikesStyles';
import Notify from '../../Components/Notify/Notify';
import Loading from '../../Components/Loading/Loading-2';
export default class LikesScreen extends React.Component {

    static navigationOptions = {
        title: 'Likes',
        header: null
    };
    _RefreshOn=()=>{
        this.setState({isRefreshing:true,isLoading:true});
        this._LoadUserHistory();
        this.setState({isRefreshing:false});
    };
    _GetDataHistory = async(username) => {
      let data= {};
      await fetch("http://10.0.2.2:3000/history?username="+username)
          .then((response)=>{return response.json()
          .then((responseJson)=>{
              data=responseJson;
          })});
      return data;
    };
    _PostClearHistory = async () => {
        Alert.alert("History has cleaned.");
        await fetch('http://10.0.2.2:3000/history/clean', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:this.state.userData.username
            }),
        });
    };
    _LoadUserHistory = async () => {
        let user = JSON.parse(await AsyncStorage.getItem("currentUser:"));
        this.setState({userData:user});
        let history = await this._GetDataHistory(this.state.userData.username);
        this.setState({userHistory:history.notifies,isLoading:false});
    };
    constructor(props){
        super(props);
        this._LoadUserHistory=this._LoadUserHistory.bind(this);
        this._PostClearHistory=this._PostClearHistory.bind(this);
        this.state={userData:{},isLoading:true,isRefreshing:false,userHistory:[]};
        this._LoadUserHistory();
    }
    render(){
        if(!this.state.isLoading && !this.state.isRefreshing) {
            return (
                <ImageBackground
                    source={require('../materials/UserBackgroundThird.png')}
                    style={{width: '100%', height: '100%'}}>
                    <Header
                        leftComponent={{icon: 'menu', color: '#fff'}}
                        centerComponent={{text: 'Likes', style: {color: '#fff'}}}
                        rightComponent={{icon: 'content-paste', color: '#fff',onPress: ()=>{
                            this._PostClearHistory();
                            this._RefreshOn();
                        }}}
                    />
                    <View style={styles.border}>
                        <ScrollView style={styles.ScrollLikes}>
                            <FlatList
                                data={this.state.userHistory}
                                renderItem={({item}) => (
                                    <Notify
                                        data={item}
                                        userData={this.state.userData}
                                    />
                                )}
                                keyExtractor={(item) => {
                                    return item.key;
                                }}
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._RefreshOn}
                                style={{minHeight:16}}
                            />
                            {this.state.userHistory.length===0 && <Text>Your history of notifications is empty!</Text>}
                        </ScrollView>
                    </View>
                </ImageBackground>
            );
        }
        else return(<Loading/>);
    }
}

