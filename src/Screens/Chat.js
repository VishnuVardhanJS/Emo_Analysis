import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import Sentiment from 'sentiment'
import uuid from 'react-native-uuid'

//Screens
import Rating from './Rating'


const sentiment = new Sentiment();
const pp = require('../../assets/Img/pp.jpg')
const Bot = {_id: 2, name: 'React Native', avatar: pp}

const Chat = () => {

  const [stateScore, setScore] = useState([])
  const [messages, setMessages] = useState([]);

  useEffect(()=> {
    console.log(stateScore)
  }, [stateScore])

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
            'Did you sleep well?','How do you look today?', 'How was the movie which you saw recently?', 'Are you relaxed now?'
            ]
            
    let rQ = qLst[Math.floor(Math.random()*qLst.length)]
    console.log(rQ)
    return rQ;
  }

  function addItem(Score){
      setScore((prevState) => prevState.concat(Score))
  }

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const text = messages[0].text
    let compScore = sentiment.analyze(text).comparative
    addItem(compScore)
    console.log(text)
    console.log(compScore)
    sendBotResponse()
    
  }, [])

  renderBubble = (props) => {
    return(
      <Bubble {...props} wrapperStyle={{ left: {backgroundColor: '#C8E3D4'}, 
          right: {backgroundColor: '#87AAAA'}}}></Bubble>
    )
  }
  
  return (
	<SafeAreaView style={{flex:1, backgroundColor: '#f6e2bc'}} >
	<GiftedChat
		messages={messages}
    showAvatarForEveryMessage={true}
		onSend={messages => onSend(messages)}
		user={{_id: 1,}}
    renderBubble= {this.renderBubble}/>
	</SafeAreaView> 
	)
}

export default Chat
