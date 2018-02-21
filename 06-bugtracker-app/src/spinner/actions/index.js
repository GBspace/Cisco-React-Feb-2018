var spinnerActionsCreator = {
	increment(delta){
		return { type : 'INCREMENT', payload : delta };
	},
	decrement(delta){
		return { type : 'DECREMENT', payload : delta };
	}
}
export default spinnerActionsCreator;