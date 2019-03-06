import React from 'react';
import {createStackNavigator} from 'react-navigation';
import NewsScreen from './NewsScreen';

export default NewsStack = createStackNavigator({
    News:NewsScreen
},
    {
        initialRouteName:'News'
    });