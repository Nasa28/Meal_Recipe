import reducer from '../Redux/reducers/category';
import actionTypes from '../Redux/constants/actionTypes';
import meals from './Meal.test';

describe('Category Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ detail: [] });
  });

  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).not.toEqual(undefined);
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.CATEGORY_FILTER,
      payload: meals,
    });

    expect(newState).toEqual({ detail: meals });
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.CATEGORY_FILTER,
      payload: meals,
    });

    expect(newState).not.toEqual(null);
  });
});
