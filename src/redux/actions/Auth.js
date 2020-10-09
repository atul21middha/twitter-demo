import {USER_SIGN_IN, USER_SIGN_OUT, USER_SIGN_UP} from "../ActionTypes";
import {idGenerator} from "../../utils/commonHelpers";
import {fetchError, fetchStart, fetchSuccess} from "./Common";

export const onUserSignUp = (user) => {
  return ((dispatch, getState) => {
    dispatch(fetchStart());
    if (user) {
      const {users} = getState().auth;
      let checkedUser = users.find(item => item.email === user.email);
      if (checkedUser) {
        dispatch((fetchError("The Email you entered is already registered")))
      } else {
        dispatch({type: USER_SIGN_UP, payload: {...user, profilePic: '', following: [], id: idGenerator()}});
        dispatch((fetchSuccess()))
      }
    } else {
      dispatch((fetchError("Something went wrong!")))
    }
  });
};

export const onUserSignIn = (user) => {
  return ((dispatch, getState) => {
    dispatch(fetchStart());
    if (user) {
      const {users} = getState().auth;
      let checkedUser = users.find(item => item.email === user.email);
      if (checkedUser) {
        if (checkedUser.password === user.password) {
          dispatch({
            type: USER_SIGN_IN,
            payload: checkedUser
          });
          dispatch((fetchSuccess()))
        } else {
          dispatch((fetchError("Please enter correct credentials!")))
        }
      } else {
        dispatch((fetchError("Please enter correct credentials!")))
      }
    } else {
      dispatch((fetchError("Something went wrong!")))
    }
  });
};

export const onUserSignOut = () => {
  return dispatch => {
    dispatch(fetchStart())
    dispatch({type: USER_SIGN_OUT});
    dispatch((fetchSuccess()))
  }
};