/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
//import {AppRegistry,StyleSheet, Button,Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import MainNavigate from './app/navigation/MainNavigate';
///Все экраны приложения

const App = createAppContainer(MainNavigate);

export default App;



