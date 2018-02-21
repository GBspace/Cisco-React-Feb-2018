import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import BugTracker from './bugTracker';
import Spinner from './spinner';

import appStore from './store';

/*
import * as bugActionsCreator from './bugTracker/actions';
import spinnerActionsCreator from './spinner/actions';

let bugActions = bindActionCreators(bugActionsCreator, appStore.dispatch);
var spinnerActions = bindActionCreators(spinnerActionsCreator, appStore.dispatch);

function renderApp(){

	let {bugsData : bugs, spinnerData : spinnerValue} = appStore.getState();
	ReactDOM.render(
		<div>
			<BugTracker {...{bugs}} {...bugActions}/>
			<Spinner value={spinnerValue} {...spinnerActions} />
		</div>,
		document.getElementById('root'));
}

renderApp();

appStore.subscribe(renderApp);
*/

ReactDOM.render(
		<Provider store={appStore}>
			<div>
				<Spinner />
				<BugTracker />
			</div>
		</Provider>,
		document.getElementById('root')
	);

registerServiceWorker();
