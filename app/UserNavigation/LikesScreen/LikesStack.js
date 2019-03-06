import React from 'react';
import {createStackNavigator} from 'react-navigation';
import LikesScreen from './LikesScreen';

export default LikesStack = createStackNavigator({
    Likes:LikesScreen
},
    {
        initialRouteName:'Likes'
    });