import { actionTypes } from '../constants/actionTypes';

export const setMeals = (meals) => {
  return {
    type: actionTypes.SET_MEALS,
    payload: meals,
  };
};

export const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,

  filter,
});
