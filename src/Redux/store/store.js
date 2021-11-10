import { createStore } from 'react-redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer, {});

export default store;
