import React, { Component } from 'react'
import {Text, Image, Dimensions, SafeAreaView, StyleSheet, View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//Resources
import Chat from './Screens/Chat'
import Rating from './Screens/Rating'
import About from './Screens/About'
const ChatBotIcon = require('../assets/Img/Chat.png')
const RatingIcon = require('../assets/Img/Rating.png')
const AboutIcon = require('../assets/Img/i.png')

const Tab = createBottomTabNavigator()

export default function Main() {
  return (
    
      <Tab.Navigator screenOptions={{
          tabBarShowLabel: false, 
          tabBarStyle: style.header,
          tabBarHideOnKeyboard: true,
        }}>

        <Tab.Screen name='Chat' component={Chat} options={{
            tabBarIcon: () => (<Image source={ChatBotIcon} style={style.AppIcon}/>),
            headerStyle: style.header,
        }}/>
        

        <Tab.Screen name='Rating' component={Rating} options={{
            tabBarIcon: () => (<Image source={RatingIcon} style={style.AppIcon}/>),
            headerStyle: style.header,            
        }}/>


        <Tab.Screen name='About' component={About} options={{
            tabBarIcon: () => (<Image source={AboutIcon} style={style.AppIcon}/>),
            headerStyle: style.header,            
        }}/>
      </Tab.Navigator>
  )
}

const style = StyleSheet.create({
    AppIcon: {
        width: 20,
        height: 20,
    },
    header: {
        backgroundColor: '#f6e2bc',

    }
})
