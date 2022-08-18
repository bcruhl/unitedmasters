import * as actionTypes from '../actionTypes';

export const focusOnNodeId = (id) => (dispatch, _, api) => {
	dispatch({
    type: actionTypes.SET_SELECTED_NODE_ID,
    payload: {selectedId: id},
  });
}