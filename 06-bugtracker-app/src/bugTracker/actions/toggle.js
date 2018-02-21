import bugService from '../services/bugServer';

export function toggle(bug){
	return function(dispatch){
		let toggledBug = {...bug, isClosed : !bug.isClosed};
		bugService
			.save(toggledBug)
			.then(response => dispatch({type : 'TOGGLE', payload : response}));
	}
}