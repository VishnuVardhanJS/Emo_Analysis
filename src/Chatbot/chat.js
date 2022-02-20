import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Sentiment from 'sentiment'
const sentiment = new Sentiment();
const pp = require('../../assets/Img/pp.jpg')

const Bot = {_id: 2, name: 'React Native', avatar: pp}

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello World',
          createdAt: new Date(),
          user: Bot
        },
      ])
    }, [])

    function botResponse(){
      qLst = ['How was your day today?', 'Are you Happy?', 'Did you greet higher authorities?', 
              'Did you have an good conversation today', 'Were people nice to you today?', 'How was your meal today',
              'Did you sleep well?','How do you look today?', 'Did you exercise today?', 'Are you relaxed now?']
    }

    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const text = messages[0].text
      console.log(text)
      console.log(sentiment.analyze(text).comparative)
    }, [])
  
  return (
	<SafeAreaView style={{flex:1, backgroundColor: '#f6e2bc'}} >
	<GiftedChat
		messages={messages}
    showAvatarForEveryMessage={true}
		onSend={messages => onSend(messages)}
		user={{_id: 1,}}/>
	</SafeAreaView>
	)
}

export default Chat
