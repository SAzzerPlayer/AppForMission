import React from 'react';
import {createStackNavigator} from 'react-navigation';
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from './EditProfileScreen/EditProfileScreen';

export default ProfileStack=createStackNavigator({
    Profile:ProfileScreen,
    EditProfile:EditProfileScreen
    },
    {
        initialRouteName:'Profile',
    }
    );