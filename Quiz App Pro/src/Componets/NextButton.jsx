export default function NextButton({
  onDispatch,
  answer,
  index,
  numQuestions,
}) {
  if (answer === null) return null;

  if (index < numQuestions - 1) return (
    <button
      className="btn btn-ui"
      onClick={() => onDispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );

  if (index === numQuestions - 1) return (
    <button
      className="btn btn-ui"
      onClick={() => onDispatch({ type: "finished" })}
    >
      Finish
    </button>
  );

};
