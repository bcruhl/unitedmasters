import * as actionTypes from '../actionTypes';
import {TreeNode} from '../../utils/treeNode';

export const setTreeInState = (dispatch, tree) => {
  dispatch({
    type: actionTypes.SET_TREE,
    payload: tree,
  });
}

/**
 * Take in flat data array of node data and build a tree for UX code that will be
 * using a depth first, pre-order traversal algorithm
 **/
const transformDataToTree = (flatTree = [], parentNode) => {
	const children = flatTree.filter(({parent}) => parent === parentNode.id);
	children.map(child => {
		const root = transformDataToTree(flatTree, new TreeNode(child))
		return parentNode.pushChild(root);
	})
	return parentNode;
}

export const loadTreeDataFromServer = () => async (dispatch, _, api) => {
	//TODO: Hard coding of URL is bad, replace with node variable
  const responseData = await api.get('http://localhost:3000/v1/getTreeData');
  let root = new TreeNode(responseData.find(({parent}) => parent === '#'));
  const tree = responseData?.length ? transformDataToTree(responseData, root) : null;
  setTreeInState(dispatch, tree);
}
