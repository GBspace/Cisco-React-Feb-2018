var SM = (function(){
	var _currentState = undefined,
		_init_action = '@@INIT_ACTION',
		_subscribers = [];

	function getState(){
		return _currentState;
	}

	function subscribe(callbackFn){
		_subscribers.push(callbackFn);
	}

	function triggerChange(){
		_subscribers.forEach(callback => callback());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange(); 
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}
	}

	return {
		createStore : createStore
	};
})();