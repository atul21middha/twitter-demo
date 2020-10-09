import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  GET_AUTH_USER,
  UPDATE_AUTH_USER,
  USER_SIGN_IN,
  USER_SIGN_OUT,
  USER_SIGN_UP
} from "../ActionTypes";
import {idGenerator} from "../../utils/commonHelpers";

export const onUserSignUp = (user) => {
  return ((dispatch, getState) => {
    if (user) {
      const {users} = getState().auth;
      let checkedUser = users.find(item => item.email === user.email);
      if (checkedUser) {
        dispatch({type: FETCH_ERROR, payload: "The Email you entered is already registered"});
      } else {
        dispatch({type: USER_SIGN_UP, payload: {...user, profilePic: '', following: [], id: idGenerator()}});
        dispatch({type: FETCH_SUCCESS, payload: "Your account has been successfully created!"});
      }
    } else {
      dispatch({type: FETCH_ERROR, payload: "Something went wrong!"});
    }
  });
};

export const onUserSignIn = (user, history) => {
  return ((dispatch, getState) => {
    if (user) {
      const {users} = getState().auth;
      let checkedUser = users.find(item => item.email === user.email);
      if (checkedUser) {
        if (checkedUser.password === user.password) {
          dispatch({
            type: USER_SIGN_IN,
            payload: checkedUser
          });
          dispatch({type: FETCH_SUCCESS});
          // history.push('/events/listing');
        } else {
          dispatch({type: FETCH_ERROR, payload: "Please enter correct credentials!"});
        }
      } else {
        dispatch({type: FETCH_ERROR, payload: "Please enter correct credentials!"});
      }
    } else {
      dispatch({type: FETCH_ERROR, payload: "Something went wrong, please try again later!"});
    }
  });
};

export const onUserSignOut = () => {
  return dispatch => {
    dispatch({type: USER_SIGN_OUT})
  }
};

export const setAuthUser = user => {
  return dispatch => {
    dispatch({
      type: GET_AUTH_USER,
      payload: user,
    });
  };
};

export const updateUserProfile = loading => {
  return dispatch => {
    dispatch({
      type: UPDATE_AUTH_USER,
      payload: loading,
    });
  };
};
