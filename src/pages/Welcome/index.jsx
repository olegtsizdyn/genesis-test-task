import React from 'react';
import { useNavigate } from "react-router-dom";

import { ReactComponent as HandIcon } from '../../assets/icons/hand-icon.svg';

import Button from '../../components/Button';

import './style.scss';

const Welcome = () => {
  const navigate = useNavigate();

  const onStartButtonHandler = () => {
    navigate('/game');
  }

  return (
    <div className='welcome-page-container'>
      <div className='block block-icon'>
        <HandIcon />
      </div>
      <div className='block'>
        <h1>
          Who wants to be <br /> a millionaire?
        </h1>
        <Button
          text={'Start'}
          onClick={onStartButtonHandler}
        />
      </div>
    </div>
  );
};

export default Welcome;