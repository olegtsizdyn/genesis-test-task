import React from 'react';

import { QUESTION_STATUS } from "../../static/enum";
import { currencyFormatter } from '../../utils';

import "./style.scss";

const QuestionsCostList = (props) => {
  const { questions } = props;

  return (
    <ul>
      {questions.map((item, index) => (
        <li
          key={index}
          className={`item ${
            item.status === QUESTION_STATUS.COMPLETED
              ? "item--completed"
              : item.status === QUESTION_STATUS.ACTIVE
                ? "item--active"
                : "item--inactive"
          }`}
        >
          <hr />
          <div className="rectangle">{"$" + currencyFormatter(item.cost)}</div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default QuestionsCostList;