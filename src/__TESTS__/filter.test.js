import reducer from '../Redux/reducers/filter';
import actionTypes from '../Redux/constants/actionTypes';

const filter = 'meat';

describe('Category Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer('All', {});
    expect(newState).toEqual('All');
  });

  it('Should return default state', () => {
    const newState = reducer('All', {});
    expect(newState).not.toEqual(undefined);
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer('All', {
      type: actionTypes.CHANGE_FILTER,
      payload: filter,
    });

    expect(newState).not.toEqual(null);
  });
});
