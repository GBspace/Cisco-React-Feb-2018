function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		return [...currentState, action.payload];
	}
	if (action.type === 'TOGGLE'){
		let toggledBug = action.payload
		return currentState.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		return currentState.filter(bug => bug.id !== bugToRemove.id);
	}
	return currentState;
}
export default bugsReducer;