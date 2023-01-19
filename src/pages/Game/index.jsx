import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SET_IS_GAME_OVER, SET_TOTAL_SCORE } from "../../redux/actions";

import QuestionsOptionsList from "../../components/QuestionsOptionsList";
import QuestionsCostList from "../../components/QuestionsCostList";
import Header from "../../components/Header";

import jsonQuestions from "../../configs/questions.json";
import { QUESTION_STATUS } from "../../static/enum";

import "./style.scss";

const Game = () => {
  const { totalScore } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(
      [...jsonQuestions]
        .sort((a, b) => (a.cost > b.cost ? 1 : -1))
        .map((item, index) => ({
          ...item,
          status: !index ? QUESTION_STATUS.ACTIVE : QUESTION_STATUS.IN_QUEUE,
        }))
    );

    dispatch({
      type: SET_TOTAL_SCORE,
      payload: 0,
    });

    dispatch({
      type: SET_IS_GAME_OVER,
      payload: false,
    });
  }, [dispatch]);

  const onOptionClickHandler = (key, index) => {
    const isCorrectAnswer = questions[index].correctAnswerOptions.map(item => item.toLowerCase()).includes(key.toLowerCase())
    
    if (isCorrectAnswer) {
      let newQuestions = [...questions];

      newQuestions[index].status = QUESTION_STATUS.COMPLETED;

      if (newQuestions[index + 1]) {
        newQuestions[index + 1].status = QUESTION_STATUS.ACTIVE;
      } else {
        gameOverHandler();
      }

      dispatch({
        type: SET_TOTAL_SCORE,
        payload: totalScore + newQuestions[index].cost,
      })

      setQuestions(newQuestions);
    } else {
      gameOverHandler()
    }
  };

  const gameOverHandler = () => {
    dispatch({
      type: SET_IS_GAME_OVER,
      payload: true,
    })

    navigate("/game-over");
  }

  return questions.length ? (
    <div className="game-page-container">
      {/* <Header /> */}
      <div className="game-board">
        <p className="game-board--text">{questions.find(item => item.status === QUESTION_STATUS.ACTIVE).question}</p>
        <QuestionsOptionsList 
          questions={questions}
          onOptionClickHandler={onOptionClickHandler}
        />
      </div>
      <div className="game-questions">
        <QuestionsCostList 
          questions={questions} 
        />
      </div>
    </div>
  ) : null;
};

export default Game;
