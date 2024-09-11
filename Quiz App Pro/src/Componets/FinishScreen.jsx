export default function FinishScreen({ points, maxPoints, highScore, onDispatch }) {
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> Out of {maxPoints}{" "}
        ({Math.ceil(percentage)})%
      </p>
      <p className="highscore">(Highscore : {highScore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => onDispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
