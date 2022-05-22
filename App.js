import React, { Component, useContext } from 'react'
import { Text, View, Image, StyleSheet, SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//screens
import Splash from './src/Splash';
import Main from './src/Main'
import Analysis from './src/Analysis';
import Chat from './src/Screens/Chat';
import { StateProvider } from './src/States';

const Stack = createStackNavigator();

const App = () => {

  return (
    <StateProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{animationEnabled: false, header: () => null}}
          component={Splash}
        />
        <Stack.Screen
          name="chat"
          options={{animationEnabled: true, header: () => null}}
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </StateProvider>
  );
};

export default App;


