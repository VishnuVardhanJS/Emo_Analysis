import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Sentiment from 'sentiment'
import uuid from 'react-native-uuid'
const sentiment = new Sentiment();
const pp = require('../../assets/Img/pp.jpg')

const Bot = {_id: 2, name: 'React Native', avatar: pp}

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello!',
        createdAt: new Date(),
        user: Bot
      },
    ])
  }, [])


  function sendBotResponse(){
    let msg = {
      _id: uuid.v4(),
      text: botResponse(),
      createdAt: new Date(),
      user: Bot
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]))

  }

  function botResponse(){
    let qLst = ['How was your day today?', 'Are you Happy?', 'Did you greet higher authorities?', 
            'Did you have an good conversation today?', 'Were people nice to you today?', 'How was your meal today?',
            'Did you sleep well?','How do you look today?', 'Did you exercise today?', 'Are you relaxed now?'
            ]
            
    let rQ = qLst[Math.floor(Math.random()*qLst.length)]
    console.log(rQ)
    return rQ;
  }

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const text = messages[0].text
    console.log(text)
    console.log(sentiment.analyze(text).comparative)
    sendBotResponse()
    
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
