import Options from "./Options";

export default function Question ({questions, onDispatch, answer}) {
    
    return (
        <div>
            <h4>{questions.question}</h4>
            <Options 
            questions={questions}
            onDispatch={onDispatch}
            answer={answer}
            />
        </div>
    )
};