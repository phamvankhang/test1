import * as types from '../actions/action-types';

const initialState = {
  deals: []
};

const homeReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_DEALS_SUCCESS:
      return Object.assign({}, state, { deals: action.deals });

  }

  return state;

}

export default homeReducer;
