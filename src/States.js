import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

const setStates = React.createContext()

const StateProvider = (props) =>{

    const [Score, setScore] = useState(0)

    
    return (
        <setStates.Provider value={{
            setScore,
            Score
        }}>
        {props.children}
        </setStates.Provider>
    )
}

export {setStates, StateProvider}