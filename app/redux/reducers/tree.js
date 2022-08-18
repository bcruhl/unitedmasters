import produce from 'immer';
import * as actionTypes from '../actionTypes';
import initialState from './initialState';

export const tree = produce((state = initialState.tree || {}, action) => {
  switch (action.type) {
    case actionTypes.SET_TREE:
      return action.payload;
    default:
      return state;
  }
});
