import reducer from '../Redux/reducers/mealReducer';
import actionTypes from '../Redux/constants/actionTypes';
import meals from './Meal.test';

describe('Meal Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ myMeals: [] });
  });

  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).not.toEqual(undefined);
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.SET_MEALS,
      payload: meals,
    });

    expect(newState).toEqual({ myMeals: meals });
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.SET_MEALS,
      payload: meals,
    });

    expect(newState).not.toEqual(null);
  });
});
