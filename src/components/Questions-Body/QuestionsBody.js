import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import { ScoreContext } from "../../context/ScoreContext.js";
import { Link, useNavigate } from "react-router-dom";
import { ResultContext } from "../../context/ResultContext.js";

function QuestionsBody({
  questions,
  setQuestions,
  currQues,
  setCurrQues,
  options,
  setOptions,
  correctAnswer,
}) {
  const [selectedOption, setSelectedOption] = useState();
  const [error, setError] = useState(false);
  const { score, setScore } = useContext(ScoreContext);
  const { result, resultDispatch } = useContext(ResultContext);

  const navigate = useNavigate();

  //function to update the select state, score state and error state
  const optionClickHandler = (opt) => {
    setSelectedOption(opt);
    if (opt === correctAnswer) setScore((score) => score + 1);
    setError(false);
  };

  //function to add change classname based on the option selected by the user

  const handleSelect = (opt) => {
    if (selectedOption === opt && selectedOption === correctAnswer) {
      return "correct";
    } else if (selectedOption === opt && selectedOption !== correctAnswer) {
      return "wrong";
    } else if (opt === correctAnswer) {
      return "correct";
    }
  };

  //function to add functionality to Next button
  const handleNext = () => {
    if (!selectedOption) {
      setError(true);
    } else if (currQues + 1 === questions.length) {
      navigate("/result");
    } else if (selectedOption) {
      resultDispatch({
        type: "ADDED",
        payload: {
          question: questions[currQues],
          optionSelected: selectedOption,
        },
      });
      setCurrQues((currQues) => currQues + 1);
      setSelectedOption();
    } else setError("Please Select An Option First");
  };

  console.log(result);
  //function to add functionality to Quit button

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
    setScore(0);
    navigate("/");
  };

  return (
    <div className="question-body">
      <h2>Question {currQues + 1}</h2>
      <div className="single-question">
        {questions && <h4>{questions[currQues].question}</h4>}
        {error && <div className="error-message">Please Select An Option </div>}
        <div className="options">
          {options &&
            options.map((opt) => (
              <button
                key={opt}
                onClick={() => optionClickHandler(opt)}
                className={`single-option ${
                  selectedOption && handleSelect(opt)
                }`}
                disabled={selectedOption}
              >
                {opt}
              </button>
            ))}
        </div>

        <div className="controls">
          <Link to="/">
            <Button
              onClick={handleQuit}
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 185 }}
            >
              Quit
            </Button>
          </Link>
          <Button
            onClick={handleNext}
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
          >
            {currQues > 10 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuestionsBody;
