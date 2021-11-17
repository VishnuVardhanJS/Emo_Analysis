import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Sentiment from 'sentiment'
const sentiment = new Sentiment();

export default class Analysis extends Component {
    state = {
        sentimentScore: 0,
        generalSentiment: 0,
    }

    findSentiment=(event)=>{
        const result = sentiment.analyze(event)
        console.log(result)
        this.setState({
          sentimentScore: result.score  
        })
    }

    render() {
        return (
            <View>
                <Text>Input Below</Text>
                <TextInput style={styles.textbox} onChangeText={value => this.findSentiment(value)}></TextInput>
                <Text>Sentiment Score: {this.state.sentimentScore}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textbox: {
        borderWidth: 1,
        borderColor: '#777'
    }
})
