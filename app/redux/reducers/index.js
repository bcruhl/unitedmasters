import * as treeReducer from './tree';
import * as interactionsReducer from './interactions';

//This hooks the reducers into the main context
export default {
  ...treeReducer,
  ...interactionsReducer,
}
