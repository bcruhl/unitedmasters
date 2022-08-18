import React from 'react';
import PropTypes from 'prop-types';
import Strings from '../../utils/strings';

const EntryItem = props => {
	const {index, stringKey, children} = props;
  return (
		<p key={index}>{Strings.str('entryItem', {left: Strings.str(stringKey), right: children})}</p>
  );
};

EntryItem.propTypes = {
	index: PropTypes.number, //index of array
	stringKey: PropTypes.string, //name of property (cooresponds to a String.key)
	children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired, //value of property
}

export default EntryItem;
