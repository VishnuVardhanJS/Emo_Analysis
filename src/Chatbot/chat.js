import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'

const botAvatar = require('../assets/Img/Botpic.png')
const chatBot = {
    _id: 2,
    name: 'chatBot'
    avatar: botAvatar
}

export default class chat extends Component {
    state = {
        messages: [
            {_id: 1, text: 'Hello!', createdAt: new Date(), user: chatBot}
        ],
        id: 1,
        name: ''
    }


    render() {
        return (
            <View style={styles.chatbg}>
                <GiftedChat 
                    messages={this.state.messages}
                    user={[_id: 1]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chatbg: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
