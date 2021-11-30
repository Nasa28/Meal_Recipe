import actionTypes from '../constants/actionTypes';

const initialState = {
  myMeals: [],
};

const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MEALS:
      return { ...state, myMeals: payload };
    default:
      return state;
  }
};

export default mealReducer;
