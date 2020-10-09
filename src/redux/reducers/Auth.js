import {
  FOLLOW_USER,
  GET_AUTH_USER,
  UNFOLLOW_USER,
  UPDATE_AUTH_USER,
  USER_SIGN_IN,
  USER_SIGN_OUT,
  USER_SIGN_UP
} from "../ActionTypes";
import {users} from "../../database";

const INIT_STATE = {
  users: users,
  authUser: {
    id: 323232,
    name: "Atul Midha",
    username: 'atul253middha',
    email: "atul253middha@gmail.com",
    password: "12345678",
    profilePic: require('../../assets/images/avatar4.jpg'),
    following: []
  },
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload,
      };
    }

    case UPDATE_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload,
      };
    }

    case USER_SIGN_UP: {
      return {
        ...state,
        users: [...state.users, action.payload],
        authUser: action.payload
      }
    }

    case USER_SIGN_IN: {
      return {
        ...state,
        authUser: action.payload
      }
    }

    case USER_SIGN_OUT: {
      return {
        ...state,
        authUser: null
      }
    }

    case FOLLOW_USER: {
      return {
        ...state,
        authUser: {...state.authUser, following: state.authUser.following.concat(action.payload)}
      }
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        authUser: {...state.authUser, following: state.authUser.following.filter(item => item.id !== action.payload)}
      }
    }

    default:
      return state;
  }
};
