import { createSelector } from 'reselect';

export const getInteractions = state => state.interactions;

export const getSelectedNodeItemId = createSelector(
  [getInteractions],
  interactions => interactions ? interactions.selectedId : ''
)



