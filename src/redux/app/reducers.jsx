import {
  SET_SIDE_BAR_OPEN
} from './actions';

const INIT_STATE = {
  isSideBarOpen: false,
};

const app = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_SIDE_BAR_OPEN:
      return {
        ...state,
        isSideBarOpen: action.payload,
      }
    default:
      return state
  }
}

export default app