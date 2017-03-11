import axios from 'axios';
import store from '../store';
import { getDealsSuccess } from '../actions/home-actions';

/**
 * Get all deals
 */

export function getDeals() {
  return axios.get('https://dev.jamja.vn/api/v3/searchdeal/')
    .then(response => {
      console.log(response)
      store.dispatch(getDealsSuccess(response.data.objects));
      return response;
    });
}
