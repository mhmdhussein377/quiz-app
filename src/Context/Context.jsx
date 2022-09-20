import React, {createContext, useState} from 'react';

export let quizContext = createContext();

const ContextProvider = ({children}) => {

    let [gameState,setGameState] = useState("menu");
    let [score, setScore] = useState(0);

    return (
        <quizContext.Provider value={{
            gameState, setGameState, score, setScore
        }}>
            {children}
        </quizContext.Provider>
    )
}

export default ContextProvider