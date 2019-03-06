import React from 'react';
import {AppRegistry,Animated,View,ImageBackground,Image,Text} from 'react-native';

export default class Loading2 extends React.Component{
    constructor(props){
    super(props);
    this.state={degrees:'0deg',count:0};
    Animated.timing(this.state.count,
        {
            toValue:180,
            duration:1500,
            step:1
        }
    )
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
                    transform: [{ rotate: this.state.count+'deg'}]}}
                source={require('./Loading.png')}/>
                <Text style = {{textAlign: `center`,
                    fontSize: 20,
                    fontWeight: `bold`}}>Loading...</Text>
            </View>
        </ImageBackground>
        );
    }
}

AppRegistry.registerComponent('Loading2',()=>Loading);