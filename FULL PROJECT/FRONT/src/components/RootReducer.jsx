// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers if needed
});

export default rootReducer;
