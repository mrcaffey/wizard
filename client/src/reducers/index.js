import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import tags from './tags';

const rootReducer = combineReducers({
  user,
  flash
});

export default rootReducer;
