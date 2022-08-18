import React from 'react';
import PropTypes from 'prop-types'
import NodeItem from './NodeItem'

const ParentNode = props => {
	const { id, descendants } = props.node;
  return (
		<li>
			<NodeItem {...props} />
			{descendants?.length > 0 && (
				<ul>
					{descendants.map(child => <ParentNode key={`parent_${child.id}`} node={child} /> )}
				</ul>
			)}
		</li>
  );
};

NodeItem.propTypes = {
  node: PropTypes.object.isRequired, //type: TreeNode
}

export default ParentNode;
