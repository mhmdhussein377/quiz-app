import React, { useContext } from "react";
import { quizContext } from "../Context/Context";
import { Questions } from "../helper/QuestionBank"

const EndScreen = () => {
  let { setGameState, score, setScore } = useContext(quizContext);

  function handleClick() {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div className="endScreen">
        <h1>Quiz Finished</h1>
        <h3>{score} out of {Questions.length}</h3>
        <button onClick={() => handleClick()}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
