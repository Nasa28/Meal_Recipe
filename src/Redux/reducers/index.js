import { combineReducers } from 'redux';
import mealReducer from './mealReducer';
import filterReducer from './filter';
import categoryReducer from './category';

const rootReducer = combineReducers({
  recipe: mealReducer,
  filter: filterReducer,
  setcategory: categoryReducer,
});

export default rootReducer;
