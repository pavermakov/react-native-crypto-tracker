import axios from 'axios';
import { apiBaseUrl } from '../utils/constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from '../utils/actionTypes';

const fetchCoinData = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios.get(`${apiBaseUrl}/v1/ticker?limit=10`)
      .then((response) => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.log('CHICKENS', error)
        dispatch({ type: FETCHING_COIN_DATA_FAIL, error: error.data });
      });
  };
};

export default fetchCoinData;
