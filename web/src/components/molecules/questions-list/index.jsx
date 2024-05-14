import React from "react";

import QestionItem from "../../atoms/question-item";

const QuestionsList = ({ questions }) => {
  return (
    <div className="faq-list">
      <ul>
        {questions.map(({ title, description }, index) => (
          <QestionItem
            title={title}
            description={description}
            index={index + 1}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
