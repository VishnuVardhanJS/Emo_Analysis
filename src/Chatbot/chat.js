import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Sentiment from 'sentiment'
const sentiment = new Sentiment();

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello World',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {text} = messages[0]
      console.log(text)
      console.log(sentiment.analyze(text).score)
    }, [])
  
    return (
	    <View style={{flex:1, backgroundColor: '#f6e2bc'}} >
	<GiftedChat
		messages={messages}
		onSend={messages => onSend(messages)}
		user={{_id: 1,}}/>
	</View>
	
    )
}

export default Chat
