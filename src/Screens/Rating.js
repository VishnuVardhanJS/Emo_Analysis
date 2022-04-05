import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'



export default function Rating({parentScore}) {

  function setChanged(compScore) {
    this.setState({ sentimentScore: compScore });
  }

  return (
    <View>
    <Text>Sentiment Score: {parentScore}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  bg: {
    backgroundColor: '#f6e2bc',
    flex: 1
  }
})