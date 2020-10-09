import {CREATE_TWEET, DELETE_TWEET, GET_SUGGESTIONS_LIST, GET_TWEETS_INFO, UPDATE_TWEET} from "../ActionTypes";

const initState = {
  tweetsInfo: [],
  suggestionsList: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_TWEETS_INFO: {
      return {
        ...state,
        tweetsInfo: action.payload
      }
    }
    case CREATE_TWEET: {
      return {
        ...state,
        tweetsInfo: [action.payload, ...state.tweetsInfo]
      }
    }

    case UPDATE_TWEET: {
      return {
        ...state,
        tweetsInfo: state.tweetsInfo.map(item => item.id === action.payload.id ? action.payload : item)
      }
    }

    case DELETE_TWEET: {
      return {
        ...state,
        tweetsInfo: state.tweetsInfo.filter(item => item.id !== action.payload)
      }
    }

    case GET_SUGGESTIONS_LIST: {
      return {
        ...state,
        suggestionsList: action.payload
      }
    }
    default:
      return state;
  }
}