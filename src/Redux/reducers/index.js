import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mealReducer from './mealReducer';
import filterReducer from './filter';
import categoryReducer from './category';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['recipe'],
};
const rootReducer = combineReducers({
  recipe: mealReducer,
  filter: filterReducer,
  setcategory: categoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
