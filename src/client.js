/**
 * Created by khangpv on 3/11/17.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'


import { configureStore, DevTools } from './store'

const store = configureStore(browserHistory, window.__REDUX_STATE__)
const history = syncHistoryWithStore(browserHistory, store)


// Pick up any initial state sent by the server
// const initialState = window.__REDUX_STATE__
// const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
