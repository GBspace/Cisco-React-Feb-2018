function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		return [...currentState, action.payload];
	}
	if (action.type === 'TOGGLE'){
		let bugToToggle = action.payload.bugToToggle,
			toggledBug = action.payload.toggledBug;
		return currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		return currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
	}
	return currentState;
}
export default bugsReducer;