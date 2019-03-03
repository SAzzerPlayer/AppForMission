import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';

// Навигация экранов авторизации
const AuthNavigate = createSwitchNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
    },
    {
        initialRouteName: 'Login'
    });

export default AuthNavigate;
