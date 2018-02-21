import React from 'react';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

const BugTracker = ({bugs, addNew, toggle, removeClosed}) => (
	<div>
		<BugStats bugs={bugs} />
		<BugEdit addNew={addNew} />
		<BugList {...{bugs, toggle, removeClosed}} />
	</div>
);
export default BugTracker;