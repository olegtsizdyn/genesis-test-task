import React from 'react';

import './style.scss';

const Button = (props) => {
  const {
    text,
    onClick
  } = props;

  return (
    <button 
      className='primary-button'
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;