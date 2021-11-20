import actionTypes from '../constants/actionTypes';

export const setMeals = (meals) => ({
  type: actionTypes.SET_MEALS,
  payload: meals,
});

export const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  filter,
});

export const categories = (meals) => ({
  type: actionTypes.CATEGORY_FILTER,
  payload: { meals },
});
