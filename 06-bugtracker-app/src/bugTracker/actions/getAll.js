import bugService from '../services/bugServer';

export function getAll(){
	return function(dispatch){
		console.log(arguments);
		bugService
			.getAll()
			.then(response => dispatch({type : 'LOAD', payload : response}));
	}
}