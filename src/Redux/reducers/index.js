import { combineReducers } from 'redux';
import mealReducer from './mealReducer';

const rootReducer = combineReducers({
  recipe: mealReducer,
});

export default rootReducer;
