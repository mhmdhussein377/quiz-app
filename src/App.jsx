import './App.css';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import React, { useContext } from "react";
import {quizContext} from "./Context/Context";

function App() {

  let { gameState, setGameState, score } = useContext(quizContext);
  console.log(score)
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
    </div>
  );
}

export default App
