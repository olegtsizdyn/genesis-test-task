import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { SET_SIDE_BAR_OPEN } from "../../redux/app/actions"; 

import { ReactComponent as BurgerIcon } from '../../assets/icons/burger-icon.svg';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross-icon.svg';

import './style.scss';

const Header = () => {
  const { isSideBarOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div className='header-container'>
      <button onClick={() => {
        dispatch({
          type: SET_SIDE_BAR_OPEN,
          payload: !isSideBarOpen
        })
      }}>
        {isSideBarOpen
          ? <CrossIcon />
          : <BurgerIcon />
        }
      </button>
    </div>
  );
};

export default Header;