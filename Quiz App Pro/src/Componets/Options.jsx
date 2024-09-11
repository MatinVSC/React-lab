export default function Options({ questions, onDispatch, answer }) {

    const hasAnswered = answer !== null;

  return (
    <div className="aptions">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} 
          ${hasAnswered 
            ? index === questions.correctOption ? 
            'correct' 
            : 'wrong'
            : '' }`} 
          key={option}
          disabled={hasAnswered}
          onClick={() => onDispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
