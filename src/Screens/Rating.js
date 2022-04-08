import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useCallback, useEffect, useContext } from 'react'

import { setStates } from '../States'


export default function Rating() {
  const conState = useContext(setStates)
  return (
    <View style={style.bg} >
    <Text style={style.text} >Sentiment Score: {conState.Score}</Text>
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
  }
})
