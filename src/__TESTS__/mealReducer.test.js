import reducer from '../Redux/reducers/mealReducer';
import actionTypes from '../Redux/constants/actionTypes';
import { setMeals } from '../Redux/Actions/mealActions';

describe('Meal Reducer', () => {
  const meals = [
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      idMeal: '52959',
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
      idMeal: '52819',
    },
    {
      strMeal: 'Escovitch Fish',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1520084413.jpg',
      idMeal: '52944',
    },
  ];

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
