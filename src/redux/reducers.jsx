import {
  SET_TOTAL_SCORE,
  SET_IS_GAME_OVER
} from './actions';

const INIT_STATE = {
  totalScore: 0,
  isGameOver: false
};

const game = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: action.payload,
      }
    case SET_IS_GAME_OVER:
      return {
        ...state,
        isGameOver: action.payload,
      }
    default:
      return state
  }
}

export default game