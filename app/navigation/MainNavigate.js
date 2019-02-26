import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {createStackNavigator, createBottomTabNavigator,createSwitchNavigator} from 'react-navigation'
import StartNavigate from './StartNavigate'
/*
* Основная навигация приложения. Всего 4 экрана:
* Profile, Likes, News, Wall .
* Данный код осуществляет нижнее табменю для перехода между экранами.
*
*
*
*
*
 */

class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile'
    };

    render(){
        return(
            <View style={styles.profileView}>
                <Text>This is a Profile!</Text>
            </View>
        )
    }
}

class LikesScreen extends React.Component {

    static navigationOptions = {
        title: 'Likes'
    };

    render(){
        return(
            <View style={styles.likesView}>
                <Text>This is a Likes!</Text>
            </View>
        )
    }
}

class NewsScreen extends React.Component {

    static navigationOptions = {
        title: 'News'
    };

    render(){
        return(
            <View style={styles.newsView}>
                <Text>This is a News!</Text>
            </View>
        )
    }
}

class WallScreen extends React.Component {

    static navigationOptions = {
        title: 'Wall'
    };

    render(){
        return(
            <View style={styles.wallView}>
                <Text>This is a Wall!</Text>
            </View>
        )
    }
}

// Навигация основного меню
const UserNavigate = createBottomTabNavigator({
        Wall: WallScreen,
        News: NewsScreen,
        Likes: LikesScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Wall"

    });
// Вся система навигации
const MainNavigate = createSwitchNavigator({
        Start: StartNavigate,
        User: UserNavigate
    },
    {
        initialRouteName: "Start"

});

export default MainNavigate;
//Стили графического отображения меню
const styles = StyleSheet.create({
    profileView:{
        flex:1,
        alignItems:"center",
        backgroundColor:'grey'
    },
    likesView:{
        flex:1,
        alignItems:"center",
        backgroundColor:'blue'
    },
    newsView:{
        flex:1,
        alignItems:"center",
        backgroundColor:'red'
    },
    wallView:{
        flex:1,
        alignItems:"center",
        backgroundColor:'green'
    }
});
