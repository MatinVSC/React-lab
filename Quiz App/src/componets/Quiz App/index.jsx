import { useState } from "react";
import { QUESTIONS } from "../../data/question";
import "./index.css"


const QuizApp = () => {
  
const [state, setState] = useState(false); 
const [step , setstep] = useState(0);
const [point, setpoint] = useState(0);
const [answer, setAnswer] = useState(null);

const clickHandler = (isCorrect) => {
     setAnswer(isCorrect)
};

const nextQuestionHandler = () => {
    answer === QUESTIONS[step].correctOption && setpoint((point) => point + QUESTIONS[step].points)
    step === 14 ? setState(true) : setstep(step + 1);
}

const restartHandler = () => {
    setstep(0)
    setState(false)
}
    
    return (
        <div className='app'>
                {state ? (
                    <div className='score-section'>
                    You scored {point} out of 280
                    <button onClick={restartHandler}>RESTAER</button>
                </div>
                    ) : (
                        <div>
                        <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {step + 1}</span>/ {QUESTIONS.length}
                        </div>
                        <div className='question-text'>{QUESTIONS[step].question}</div>
                    </div>
                    <div className='answer-section'>
                         {QUESTIONS[step].options.map( (option, index) => (
                            <button
                            key={index} 
                            onClick={() => clickHandler(index)}>
                            {option}
                            </button>
                         ))}
                    <div className="point">
                         <span>Points : {point}</span>
                         <button onClick={() => nextQuestionHandler(QUESTIONS[step].correctOption)}>Next</button>
                    </div>     
                    </div>
                    </div>
                )}
        </div>
    );

};

export default QuizApp