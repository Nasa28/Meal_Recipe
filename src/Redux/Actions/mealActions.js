import { actionTypes } from '../constants/actionTypes';

export const setMeals = (meals) => {
  return {
    type: actionTypes.SET_MEALS,
    payload: meals,
  };
};

export const changeFilter = (filter) => {
  return {
    type: actionTypes.CHANGE_FILTER,
    filter,
  };
};

export const categories = (meals) => {
  return {
    type: actionTypes.CATEGORY_FILTER,
    payload: { meals },
  };
};
