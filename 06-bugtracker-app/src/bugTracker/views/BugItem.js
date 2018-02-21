import React from 'react';

const BugItem = ({bug, toggle}) => (
	<li >
		<span className={'bugname ' + (bug.isClosed ? 'closed' : '')} onClick={() => toggle(bug)}>{bug.name}</span>
		<div>{bug.isClosed.toString()}</div>
		<div className="datetime">[Created At]</div>
	</li>
);
export default BugItem;