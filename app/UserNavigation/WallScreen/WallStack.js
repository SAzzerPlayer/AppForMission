import React from 'react';
import {createStackNavigator} from 'react-navigation';
import WallScreen from './WallScreen';

export default WallStack = createStackNavigator({
        Wall: WallScreen
    },
    {
        initialRouteName: 'Wall'
    }
);