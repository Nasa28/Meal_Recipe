import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mealReducer from './mealReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['recipe'],
};
const rootReducer = combineReducers({
  recipe: mealReducer,
});

export default persistReducer(persistConfig, rootReducer);
