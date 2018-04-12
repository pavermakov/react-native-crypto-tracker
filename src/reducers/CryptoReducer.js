import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from '../utils/actionTypes';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...initialState,
        isFetching: true,
      };

    case FETCHING_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case FETCHING_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.error,
      };

    default:
      return state;
  }
}
