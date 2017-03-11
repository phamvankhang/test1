import * as types from '../actions/action-types';

export function getDealsSuccess(deals) {
  return {
    type: types.GET_DEALS_SUCCESS,
    deals
  };
}
