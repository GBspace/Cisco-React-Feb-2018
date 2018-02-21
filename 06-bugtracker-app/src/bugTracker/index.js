import React, { Component }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import * as bugActionsCreator from './actions';


/*const BugTracker = ({bugs, addNew, toggle, removeClosed}) => (
	<div>
		<BugStats bugs={bugs} />
		<BugEdit addNew={addNew} />
		<BugList {...{bugs, toggle, removeClosed}} />
	</div>
);*/

class BugTracker extends Component{
	componentDidMount(){
		this.props.getAll();
	}
	render(){
		let {bugs, addNew, toggle, removeClosed} = this.props;
		return (
			<div>
				<BugStats bugs={bugs} />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

//logic for extracting the relevant state for bugTracker from the store
function mapStateToProps(state){
	let { bugsData } = state;
	return {bugs : bugsData};
}

//logic for creating action functions using the given dispatch
function mapDispatchToProps(dispatch){
	let bugActions = bindActionCreators(bugActionsCreator, dispatch);
	window.bugActions = bugActions;
	return bugActions;
}


export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);


