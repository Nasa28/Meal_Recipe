import * as actions from '../actions/constants';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case actions.CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
