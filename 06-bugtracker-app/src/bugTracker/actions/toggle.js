export function toggle(bug){
	let toggledBug = {...bug, isClosed : !bug.isClosed},
		payload = {bugToToggle : bug, toggledBug : toggledBug};
	return { type : 'TOGGLE', payload : payload};
}