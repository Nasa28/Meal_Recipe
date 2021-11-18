import { actionTypes } from '../constants/actionTypes';

const initialState = {
  new: [],
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CATEGORY_FILTER:
      return { ...state, new: payload };
    default:
      return state;
  }
};

export default categoryReducer;
