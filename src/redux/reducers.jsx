import {
  SET_TOTAL_SCORE,
} from './actions';

import questions from '../configs/questions.json';

const INIT_STATE = {
  questions: questions,
  totalScore: 0,
};

const game = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: action.payload,
      }
    default:
      return state
  }
}

export default game