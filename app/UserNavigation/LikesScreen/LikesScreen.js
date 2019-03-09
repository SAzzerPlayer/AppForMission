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
    _RefreshOn=async()=>{
        this.setState({isRefreshing:true});
        await this.setState({userData:JSON.parse(await AsyncStorage.getItem('currentUser:'))});
        this.setState({isRefreshing:false});
    };
    _FilteringHistory= ()=>{
        let array = this.state.userData.history;
        let isFound=false;
        for(let elem of array){
            for(let post of this.state.userData.posts){
                if(elem.id === post.id){
                    isFound=true;
                    break;
                }
            }
            if(isFound === false){
                   array.splice(array.indexOf(elem),1);
            }
            else{
                isFound=false;
            }

        }
        this.state.userData.history=array;
        this.setState({userData:this.state.userData});
        this._SaveUserData();
    };
    _LoadUserData = async () => {
        let tempData = JSON.parse(await AsyncStorage.getItem('currentUser:'));

        this.setState({userData:tempData});
        this._FilteringHistory();
        this.setState({isLoading:false});
    };
    _SaveUserData = async()=>{
        try{
            await AsyncStorage.setItem('user:'+this.state.userData.nickname,
                JSON.stringify(this.state.userData));
            await AsyncStorage.setItem('currentUser:',JSON.stringify(this.state.userData));
        }
        catch(except){
            Alert.alert(except);
        }
    };

    constructor(props){
        super(props);
        this.state={userData:{notifications:[]},isLoading:true,isRefreshing:false};
        this._LoadUserData();
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
                        rightComponent={{icon: 'content-paste', color: '#fff'}}
                    />
                    <View style={styles.border}>
                        <ScrollView style={styles.ScrollLikes}>
                            <FlatList
                                data={this.state.userData.history}
                                renderItem={({item}) => (
                                    <Notify
                                        data={item}
                                        userData={this.state.userData}
                                    />
                                )}
                                keyExtractor={(item) => {
                                    return item.id;
                                }}
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._RefreshOn}
                                style={{minHeight:32}}
                            />
                            {this.state.userData.history.length===0 && <Text>Your history of notifications is empty!</Text>}
                        </ScrollView>
                    </View>
                </ImageBackground>
            );
        }
        else return(<Loading/>);
    }
}

