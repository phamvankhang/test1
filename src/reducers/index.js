import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
// Reducers
import homeReducer from './home-reducer';

// Combine Reducers
var reducers = combineReducers({
  homeState: homeReducer,
  routing: routerReducer
});

export default reducers;
