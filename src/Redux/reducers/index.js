export default filterReducer;
import { combineReducers } from 'redux';
import recipeReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  filter: filterReducer,
});

export default rootReducer;
