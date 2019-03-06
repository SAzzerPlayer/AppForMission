import React from 'react';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from "./ProfileScreen";


export default ProfileStack=createStackNavigator({
    Profile:ProfileScreen,
    },
    {
        initialRouteName:'Profile',
    }
    );