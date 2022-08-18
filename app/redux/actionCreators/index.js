import * as treeActions from './tree';
import * as interactionsActions from './interactions';

//This hooks the actions into the main store
const actionCreators = {
  ...treeActions,
  ...interactionsActions,
};

export default actionCreators;
