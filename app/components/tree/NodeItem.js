import React from 'react';
import { useDispatch } from '../../redux/utils';
import PropTypes from 'prop-types';
import EntryItem from './EntryItem';
import { focusOnNodeId } from '../../redux/actionCreators/interactions';

const NodeItem = props => {
  const dispatch = useDispatch();
  const { id, properties } = props.node;
  const { name } = properties;
  //clone the properties object
  const listProperties = {...properties};
  delete listProperties.name;

  const focusOnNodeItem = evt => {
    dispatch(focusOnNodeId(evt.target.id));
    evt.preventDefault();
  }

  const entryRenderer = (objKey, index) => {
    const value = listProperties[objKey];
    let builtString = '';
    if (['number', 'string'].includes(typeof value)){
      builtString = <EntryItem
        key={`hobby_${index}_${value}`}
        index={index} 
        stringKey={objKey} 
      >{value}</EntryItem>;
    } else if (typeof value === 'object' && Array.isArray(value)) {
      if (value.length) {
        builtString = <EntryItem
          key={`hobby_${index}_${value}`}
          index={index} 
          stringKey={objKey} 
        >{value.map((item, ind) => {
          return `${ind !== 0 ? ' ' : ''} ${item}`
        })}</EntryItem>;
      }
    } else if (typeof value === 'object' && !value) {
      //We want to allow null/undefined values
      () => {};
    } else {
      console.error("Unsupported data: No renderer found", typeof value, objKey, index, value);
    }
    return builtString;
  }

  return (
    <a href="#" id={id} onFocus={focusOnNodeItem}>
      {name}
      <div>
        {Object.keys(listProperties).map((objKey, i)=>{
          return entryRenderer(objKey, i);
        })}
      </div>
    </a>
  );
};

NodeItem.propTypes = {
  node: PropTypes.object.isRequired, //type: TreeNode
}

export default NodeItem;
