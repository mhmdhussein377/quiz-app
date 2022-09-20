import React,{ useContext } from 'react';
import {quizContext} from "../Context/Context";

const MainMenu = () => {

    let {gameState, setGameState} = useContext(quizContext);

  return (
    <div className="Menu">
        <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}

export default MainMenu