import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={style.bg}>
      <Text style={style.text}>Hey! This App is made by Vishnu Vardhan J S</Text>
      <Text>(P.S. Siva told me to add his name too so yeah )</Text>
    </View>
  )
}

const style = StyleSheet.create({
  bg: {
    backgroundColor: '#f6e2bc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
})
