import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from 'reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import Layout from 'containers/layout';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Layout} />
		</Router>
	</Provider>,
	document.getElementById('root')
);