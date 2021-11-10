import actionTypes from '../constants/actionTypes';

const initialState = {
  meal: {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
};

const mealReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_MEAL:
      return state;
    default:
      return state;
  }
};

export default mealReducer;
