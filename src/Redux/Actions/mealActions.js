import actionTypes from '../constants/actionTypes';

export const setMeals = (meals) => {
  return {
    types: actionTypes.SET_MEAL,
    Payload: meals,
  };
};

export const selectedMeal = (meal) => {
  return {
    types: actionTypes.SELECTED_MEAL,
    Payload: meal,
  };
};
