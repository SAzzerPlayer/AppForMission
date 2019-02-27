import React,{Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import LikesScreen from './LikesScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';
import WallScreen from './WallScreen';
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




