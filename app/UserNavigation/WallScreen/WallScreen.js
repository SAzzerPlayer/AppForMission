import React from 'react';
import {Alert,FlatList,Text,ImageBackground,ScrollView,Image,AsyncStorage} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './WallStyles';
import GlobalImagePost from '../../Components/ImagePost/GlobalImagePost';
import Loading from '../../Components/Loading/Loading';

export default class WallScreen extends React.Component {

    static navigationOptions = {
        title: 'Wall',
        header: null
    };
    _LoadPosts = async()=>{
      let posts = JSON.parse(await AsyncStorage.getItem('global:'));
      Alert.alert(String(posts['posts'].length));
      if(posts==null || posts === undefined){
          posts={'posts':[]}
      }
      let data = JSON.parse(await AsyncStorage.getItem("currentUser:"));
      this.setState({userData:data,posts:posts['posts'],isLoading:false});
    };
    onRefresh = async()=>{
        this.setState({isRefreshing:true,isLoading:true});
        this.setState({isRefreshing:false,isLoading:false});
    };
    constructor(props){
        super(props);
        this.state={userData:{},posts:[],isLoading:true,isRefreshing:false};
        this._LoadPosts();
        for (let elem of this.state.posts){
            Alert.alert(elem.toString());
        }
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
                            renderItem={(item) => (
                                <GlobalImagePost
                                    data={(item)}
                                    item={(item)}
                                    userData={this.state.userData}
                                    extraData={this}
                                    isCurrentUser={false}
                                    isDeletingPost={false}
                                />
                            )}
                            keyExtractor={(item, index) => {
                                return item;
                            }}
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => {
                                this.onRefresh()
                            }}
                            style={{minHeight:32}}
                        />
                    </ScrollView>
                </ImageBackground>
            )
        }
        else return(<Loading/>);
    }
}