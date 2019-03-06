import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
//import LikesScreen from './LikesScreen/LikesScreen';
//import NewsScreen from './NewsScreen/NewsScreen';
//import ProfileScreen from './ProfileScreen/ProfileScreen';
//import WallScreen from './WallScreen/WallScreen';
import WallStack from './WallScreen/WallStack';
import ProfileStack from './ProfileScreen/ProfileStack';
import NewsStack from './NewsScreen/NewsStack';
import LikesStack from './LikesScreen/LikesStack';
/*
* Основная навигация приложения. Всего 4 экрана:
* Profile, Likes, News, Wall .
* Данный код осуществляет нижнее табменю для перехода между экранами.
*/

export default UserNavigate = createBottomTabNavigator({
        Wall: WallStack,
        News: NewsStack,
        Likes: LikesStack,
        Profile: ProfileStack
    },
    {
        initialRouteName: "Wall"
    });




