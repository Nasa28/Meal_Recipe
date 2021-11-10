import { combineReducers } from 'redux';
import mealReducer from './mealReducer';
import filterReducer from './filter';

const rootReducer = combineReducers({
  meal: mealReducer,
  filter: filterReducer,
});

export default rootReducer;
