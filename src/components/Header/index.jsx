import React from 'react';

import { ReactComponent as BurgerIcon } from '../../assets/icons/burger-icon.svg';

import './style.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <button>
        <BurgerIcon />
      </button>
    </div>
  );
};

export default Header;