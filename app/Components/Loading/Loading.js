import React from 'react';
import {AppRegistry,View,ImageBackground,Image,Text} from 'react-native';

export default class Loading extends React.Component{
    constructor(props){
    super(props);
    this.state={degrees:'0deg',count:0};
    setInterval(()=>{
    this.setState({degrees:(+this.state.count+1) + 'deg'});
        this.setState({count: this.state.count+1});
    },100);
    }
    render(){
        return(
        <ImageBackground style={{alignItems: `center`,
            height: `100%`,
            justifyContent: `center`,
            width: `100%`}}>
            <View>
                <Image style={{width: 128,
                    height: 128,
                    transform: [{ rotate: this.state.degrees }]}}
                source={require('./Loading.png')}/>
                <Text style = {{textAlign: `center`,
                    fontSize: 20,
                    fontWeight: `bold`}}>Loading...</Text>
            </View>
        </ImageBackground>
        );
    }
}

AppRegistry.registerComponent('Loading',()=>Loading);