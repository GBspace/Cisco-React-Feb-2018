import bugService from '../services/bugServer';

export function removeClosed(){
	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let bugsToRemove = bugs.filter(bug => bug.isClosed);
		bugsToRemove
			.forEach(closedBug => bugService
				.remove(closedBug)
				.then(() => dispatch({ type : 'REMOVE', payload : closedBug})));
	}
}