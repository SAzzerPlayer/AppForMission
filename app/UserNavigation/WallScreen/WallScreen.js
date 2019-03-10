import React from 'react';
import {Alert,FlatList,Text,ImageBackground,ScrollView,View,AsyncStorage} from 'react-native';
import {Header} from 'react-native-elements';
import styles from './WallStyles';
import GlobalImagePost from '../../Components/ImagePost/GlobalImagePost';
import Loading from '../../Components/Loading/Loading';

export default class WallScreen extends React.Component {

    static navigationOptions = {
        title: 'Wall',
        header: null
    };


    onRefresh = async()=>{
        this.setState({isRefreshing:true,isLoading:true});
        this.setState({isRefreshing:false,isLoading:false});
    };
    constructor(props){
        super(props);
        this.state={userData:{},posts:[],isLoading:true,isRefreshing:false};
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

                    </ScrollView>
                </ImageBackground>
            )
        }
        else return(<View></View>);
    }
}