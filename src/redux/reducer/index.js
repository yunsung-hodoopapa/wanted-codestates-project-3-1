import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { notificationReducer } from './notificationReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  notice: notificationReducer,
});

export default rootReducer;
