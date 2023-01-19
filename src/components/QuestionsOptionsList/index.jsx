import React from 'react';

import { QUESTION_STATUS } from "../../static/enum";

import "./style.scss";

const QuestionsOptionsList = (props) => {
  const { questions, onOptionClickHandler } = props;

  return (
    <div className="game-board--options">
      {questions.find(item => item.status === QUESTION_STATUS.ACTIVE).options.map((item, index) => (
        <div 
          key={index} 
          className="item"
          onClick={() => onOptionClickHandler(item.key, questions.findIndex(item => item.status === QUESTION_STATUS.ACTIVE))}
        >
          <hr />
          <div className="rectangle"><label>{item.key}</label> {item.text}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default QuestionsOptionsList;