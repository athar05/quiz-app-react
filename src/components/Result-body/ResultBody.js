import React, { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";
import { ScoreContext } from "../../context/ScoreContext";

function ResultBody() {
  const { result } = useContext(ResultContext);
  const { score } = useContext(ScoreContext);
  return (
    <div className="result-body">
      <h2>Result</h2>
      {result.map((obj) => (
        <div>
          {obj.isCorrect ? (
            <div className="result-question-body">
              <h5>Q. {obj.question}</h5>
              <div className="result-option">
                <h6>Your Answer: {obj.correct_answer} ✅</h6>
              </div>
            </div>
          ) : (
            <div className="result-question-body">
              <h5>Q. {obj.question}</h5>
              <div className="result-option">
                <h6>Your Answer: {obj.optionSelected} ❌</h6>
              </div>
              <div className="result-option">
                <h6>Correct Answer: {obj.correct_answer} ✅</h6>
              </div>
            </div>
          )}
        </div>
      ))}
      <h3 style={{ textAlign: "center" }}>📈 Your Score: {score}</h3>
    </div>
  );
}

export default ResultBody;
