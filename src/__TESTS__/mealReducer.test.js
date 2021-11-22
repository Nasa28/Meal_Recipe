import reducer from '../Redux/reducers/mealReducer';
import actionTypes from '../Redux/constants/actionTypes';
import { setMeals } from '../Redux/Actions/mealActions';

describe('Meal Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual({ myMeals: [] });
  });

  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).not.toEqual(undefined);
  });
});
