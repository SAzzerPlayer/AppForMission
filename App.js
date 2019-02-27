/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigation from './app/navigation/MainNavigation';
///Все экраны приложения

const App = createAppContainer(MainNavigation);

export default App;


