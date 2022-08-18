import produce from 'immer';
import * as actionTypes from '../actionTypes';
import initialState from './initialState';

export const interactions = produce((state = initialState.interactions || {}, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_NODE_ID:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
});
