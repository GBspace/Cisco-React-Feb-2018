import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;