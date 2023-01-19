import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as HandIcon } from '../../assets/icons/hand-icon.svg';

import Button from '../../components/Button';

import './style.scss';

const Welcome = () => {
  const { totalScore, isGameOver } = useSelector(state => state.game);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isGameOver) {
      navigate('/');
    }
  }, [isGameOver, navigate]);

  const onStartButtonHandler = () => {
    navigate('/game');
  }

  return (
    <div className='welcome-page-container'>
      <div className='block block-icon'>
        <HandIcon />
      </div>
      <div className='block'>
        {isGameOver
          ? <div className='block--game-over'>
              <label>Total score:</label>
              <h1>
                ${totalScore} earned
              </h1>
            </div>
          : <h1>
              Who wants to be <br /> a millionaire?
            </h1>
        }
        <Button
          text={isGameOver ? 'Try again' : 'Start'}
          onClick={onStartButtonHandler}
        />
      </div>
    </div>
  );
};

export default Welcome;