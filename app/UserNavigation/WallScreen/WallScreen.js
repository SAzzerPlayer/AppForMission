import React from 'react';
import {Alert,FlatList,Text,ImageBackground,ScrollView,View,AsyncStorage} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './WallStyles';
import GlobalImagePost from '../../Components/ImagePost/GlobalImagePost';
import Loading from '../../Components/Loading/Loading';
import ImagePost from "../ProfileScreen/iterators/OncePostOnRow/ColumnListPosts";

export default class WallScreen extends React.Component {

    static navigationOptions = {
        title: 'Wall',
        header: null
    };
    _LoadUserData= async () => {
        let data = JSON.parse(await AsyncStorage.getItem("currentUser:"));
        this.setState({userData:data});
        await this._GetGlobalPosts();

    };
    _GetGlobalPosts = async () => {
        let data=[];
        await fetch("http://10.0.2.2:3000/posts/global?username="+this.state.userData.username+"&from=0")
            .then((response)=>{return response.json()
                .then((responseJson)=>{
                    data = responseJson;
                }
         )});
        this.setState({posts:data.posts,isLoading:false});
    };
    _OnRefresh = ()=>{
        this.setState({isRefreshing:true,isLoading:true});
        this.setState({isRefreshing:false,isLoading:false});
    };
    constructor(props){
        super(props);
        this.state={userData:{},posts:[],isLoading:true,isRefreshing:false};
        this._LoadUserData();
    }
    render(){
        if(!this.state.isLoading) {
            return (
                <ImageBackground
                    source={require('../materials/UserBackgroundThird.png')}
                    style={{width: '100%', height: '100%'}}>
                    <Header
                        leftComponent={{icon: 'menu', color: '#fff'}}
                        centerComponent={{text: 'Wall', style: {color: '#fff'}}}
                        //rightComponent={{icon: 'settings', color:'#fff'}}
                    />
                    <ScrollView style={styles.Scroll}>
                        <FlatList
                            data={this.state.posts}
                            renderItem={({item}) => (
                                <GlobalImagePost
                                    data={item}
                                    currentUser={this.state.userData}
                                    extraData={this}
                                />
                            )}
                            keyExtractor={(item)=>{return item.post.key}}
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._OnRefresh}
                        />
                    </ScrollView>
                </ImageBackground>
            )
        }
        else return(<View><Text>2222</Text></View>);
    }
}