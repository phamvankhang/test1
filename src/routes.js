/**
 * Created by khangpv on 3/11/17.
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './components/App'

import DealContainer from './components/containers/deals-container'

export default function (props = {}) {
    let history = browserHistory

    if (props.store) {
        history = syncHistoryWithStore(browserHistory, props.store)
    }

    return (
        <Router history={history}>
            <Route component={App}>
                <Route path="/" component={DealContainer} />
            </Route>
        </Router>
    )
}