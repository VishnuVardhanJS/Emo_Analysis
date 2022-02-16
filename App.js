import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Splash from './src/Splash';
import Main from './src/Main'
import Analysis from './src/Analysis';
import Chat from './src/Chatbot/Chat';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{animationEnabled: false, header: () => null}}
          component={Splash}
        />
        <Stack.Screen
          name="chat"
          options={{animationEnabled: true, title: 'Chat Bot',
		  headerStyle: {backgroundColor: '#f6e2bc'}}}
          component={Chat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


