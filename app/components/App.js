import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../redux/utils';
import { loadTreeDataFromServer } from '../redux/actionCreators/tree';
import { getTreeDataFromState } from '../redux/selectors/tree';
import { getSelectedNodeItemId } from '../redux/selectors/interactions';
import MainHeader from './navigation/MainHeader';
import ParentNode from './tree/ParentNode';
import Strings from '../utils/strings';
import '../static/css/app.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Populate the tree from the "DB" once mounted
    dispatch(loadTreeDataFromServer());
  }, []);

  //Retrive the tree from state
  const dataTree = useSelector(getTreeDataFromState);
  //Retrieve selected node from state
  const selectedId = useSelector(getSelectedNodeItemId);

  return (
    <>
      <MainHeader />
      <div className="tree-container">
        <div>{Strings.str('selectedNodeId', {nodeId: selectedId ?? Strings.str('noNodeSelected')})}</div>
        {dataTree && (
          <ul className="root">
            <ParentNode node={dataTree} />
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
