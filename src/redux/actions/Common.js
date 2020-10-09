import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE} from "../ActionTypes";

export const fetchSuccess = () => {
  return dispatch => {
    dispatch({
      type: FETCH_SUCCESS,
    });
  };
};

export const fetchError = error => {
  return dispatch => {
    dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  };
};

export const fetchStart = () => {
  return dispatch => {
    dispatch({
      type: FETCH_START,
    });
  };
};

export const hideMessage = () => {
  return dispatch => {
    dispatch({type: HIDE_MESSAGE})
  }
};
