import React from 'react';
import {createStackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen'

// Навигация экранов авторизации
const StartNavigate = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
    },
    {
        initialRouteName: 'Login'
    });

export default StartNavigate;
