import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import QuestionsHeader from "../Questions-header/QuestionsHeader";
import QuestionsBody from "../Questions-Body/QuestionsBody";
import { CircularProgress } from "@mui/material";

function Questions() {
  const { category } = useContext(CategoryContext);

  const [options, setOptions] = useState();
  const [questions, setQuestions] = useState(null);
  const [currQues, setCurrQues] = useState(0);

  //Api call to fetch the data
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${category.value}&difficulty=medium&type=multiple`
        );
        setQuestions(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);

  //function to shuffle the options array
  const handleShuffle = (optionArr) => {
    return optionArr.sort(() => Math.random() - 0.5);
  };

  //side-effect to call the shuffle function eachtime there is a new question
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  return (
    <div className="questions-container">
      {questions && (
        <QuestionsHeader questions={questions} currQues={currQues} />
      )}
      {questions ? (
        <QuestionsBody
          currQues={currQues}
          setCurrQues={setCurrQues}
          questions={questions}
          setQuestions={setQuestions}
          options={options}
          correctAnswer={questions[currQues]?.correct_answer}
        />
      ) : (
        <CircularProgress
          className="circular-progress"
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}

export default Questions;
