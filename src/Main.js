import React, { Component } from 'react'
import {Text, Image, Dimensions, SafeAreaView, StyleSheet, View} from 'react-native'
import {Card} from 'react-native-shadow-cards'
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native'


const data = [
    { year: 'Sunday', earnings: 14250 },
    { year: 'Monday', earnings: 13000 },
    { year: 'Tuesday', earnings: 16500 },
    { year: 'Wednesday', earnings: 14250 },
    { year: 'Thursday', earnings: 19000 },
    { year: 'Friday', earnings: 14250 },
    { year: 'Saturday', earnings: 14250 },
   ];

export default class Main extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Card style={styles.cards}>
                    <VictoryChart width={Dimensions.get('window').width} height={250} theme={VictoryTheme.material}>
                        <VictoryLine data={data} x="year" y="earnings"/>
                    </VictoryChart>
                </Card>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#f6e2bc', 
    },
    cards: {
        margin: 20,
        paddingLeft: 15,
        paddingRight: 15,  
        resizeMode: 'contain',
    
    }
})
