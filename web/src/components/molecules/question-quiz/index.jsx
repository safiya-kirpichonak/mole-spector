import React, { useState } from "react";

import "./style.css";

const QuestionQuiz = ({
  question,
  answers,
  correctAnswer,
  description,
  action,
}) => {
  const [disabled, setDisabled] = useState(true);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(-1);

  const checkAnswer = (index) => {
    setDisabled(false);
    setClicked(index);
    if (index === Number(correctAnswer)) setScore(10);
  };

  const nextQuestion = () => {
    setDisabled(true);
    action(score);
    setScore(0);
  };

  return (
    <div className="col-lg-4 d-flex align-items-stretch why-us">
      <div className="content">
        <p className="text-center">{question}</p>
        {answers.map((answer, index) => (
          <div>
            <button
              key={index}
              className={
                disabled
                  ? "question-button"
                  : index === Number(correctAnswer)
                  ? "correct-answer"
                  : index === clicked
                  ? "incorrect-clicked-answer"
                  : "incorrect-answer"
              }
              onClick={() => checkAnswer(index)}
              disabled={!disabled}
            >
              {answer[index]}
            </button>
          </div>
        ))}
        {!disabled && (
          <p style={{ textAlign: "justify", margin: "20px 0 20px 0" }}>
            {description}
          </p>
        )}
        <div className="text-center">
          <button
            className="more-btn"
            style={{ border: "none" }}
            onClick={nextQuestion}
            disabled={disabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionQuiz;
