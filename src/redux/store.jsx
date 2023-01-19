import { combineReducers } from 'redux';

import game from './game/reducers';
import app from './app/reducers';

export default combineReducers({
  game,
  app
})
