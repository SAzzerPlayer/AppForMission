import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {createBottomTabNavigator,createSwitchNavigator} from 'react-navigation'
import StartNavigate from '../AuthNavigation/StartNavigate'
/*
* Основная навигация приложения. Всего 4 экрана:
* Profile, Likes, News, Wall .
* Данный код осуществляет нижнее табменю для перехода между экранами.
*/

export default UserNavigate = createBottomTabNavigator({
        Wall: WallScreen,
        News: NewsScreen,
        Likes: LikesScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Wall"

    });




