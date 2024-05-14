import React, { useState } from "react";

import EdgeBlocksQuiz from "../../molecules/edge-blocks-quiz";
import SectionTitle from "../../atoms/section-title";
import QuestionQuiz from "../../molecules/question-quiz";
import data from "../../../data/quiz.json";

const QuizSection = () => {
  const [highestScore, setHighestScore] = useState(0);
  const [length, setLength] = useState(0);
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [presentQuestion, setPresentQuestion] = useState(-1);

  const startQuiz = () => {
    setHighestScore(data.questions.length * 10);
    setLength(data.questions.length);
    setPresentQuestion(0);
    setQuiz(data);
  };

  const calculateScore = (addedScore) => {
    const newScore = score + addedScore;
    setScore(newScore);
    if (presentQuestion === length - 1) {
      const result = (score / highestScore) * 100;
      switch (true) {
        case result <= 30:
          setResult(quiz.results.low);
          break;
        case result >= 30 && result <= 60:
          setResult(quiz.results.medium);
          break;
        case result >= 60 && result <= 100:
          setResult(quiz.results.high);
          break;
        default:
          setResult("You hacked me, ha-ha. Greate job.");
          break;
      }
    }
    const newPresentQuestion = presentQuestion + 1;
    setPresentQuestion(newPresentQuestion);
  };

  const restartQuiz = () => {
    setScore(0);
    setResult("");
    setPresentQuestion(0);
  };

  return (
    <section style={{ margin: "100px 0 100px 0" }} className="why-us">
      <SectionTitle title="Quiz" />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {presentQuestion === -1 ? (
          <EdgeBlocksQuiz
            action={startQuiz}
            buttonTitle="Start quiz"
            title="Start"
            description="Welcome to our skin cancer quiz! This quiz will test your knowledge of skin cancer and help you learn more about this important topic. Take your time and choose the best answer for each question. Good luck!"
          />
        ) : presentQuestion === quiz.questions.length ? (
          <EdgeBlocksQuiz
            action={restartQuiz}
            buttonTitle="Restart quiz"
            title={`${score} / ${highestScore}`}
            description={result}
          />
        ) : (
          <QuestionQuiz
            description={quiz.questions[presentQuestion].description}
            question={quiz.questions[presentQuestion].question}
            answers={quiz.questions[presentQuestion].answers}
            correctAnswer={quiz.questions[presentQuestion].correctAnswer}
            action={calculateScore}
          />
        )}
      </div>
    </section>
  );
};

export default QuizSection;
