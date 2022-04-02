import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Rating() {
  return (
    <View style={style.bg}>
      <Text>This is Rating Screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
  bg: {
    backgroundColor: '#f6e2bc',
    flex: 1
  }
})