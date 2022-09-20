import React, {useState, useContext} from 'react';
import {Questions} from "../helper/QuestionBank"
import {quizContext} from "../Context/Context";

const Quiz = () => {

    let {gameState, setGameState, score, setScore} = useContext(quizContext);
    let [currentQuestion,
        setCurrentQuestion] = useState(0);
    let [optionChosen,
        setOptionChosen] = useState("");

    function handleClick() {
        if (optionChosen) {
            if (Questions[currentQuestion].answer === optionChosen) {
                setScore(score + 1);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function finishQuiz() {
        if (optionChosen) {
            if (Questions[currentQuestion].answer === optionChosen) {
                setScore(score + 1);
            }
            setGameState("endScreen");
        }
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>
                    {Questions[currentQuestion].optionA}
                </button>
                <button onClick={() => setOptionChosen("B")}>
                    {Questions[currentQuestion].optionB}
                </button>
                <button onClick={() => setOptionChosen("C")}>
                    {Questions[currentQuestion].optionC}
                </button>
                <button onClick={() => setOptionChosen("D")}>
                    {Questions[currentQuestion].optionD}
                </button>
            </div>
            {currentQuestion === Questions.length - 1
                ? (
                    <button onClick={() => finishQuiz()}>Finish Quiz</button>
                )
                : (
                    <button onClick={() => handleClick()}>Next Question</button>
                )}
        </div>
    );
}

export default Quiz