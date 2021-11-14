import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, SafeAreaView} from 'react-native'
import { createStackNavigator, createAppContainer} from 'react-navigation';

//screens
import Splash from './src/Splash';
import Main from './src/Main'

const MainNavigator = createStackNavigator({
  Splash: { screen: Splash },
  App: { screen: Main },
}, {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

export default createAppContainer(
  MainNavigator
);


