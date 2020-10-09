import {
  CREATE_TWEET,
  DELETE_TWEET,
  FOLLOW_USER,
  GET_SUGGESTIONS_LIST,
  GET_TWEETS_INFO, UNFOLLOW_USER,
  UPDATE_TWEET
} from "../ActionTypes";
import {suggestionsList, timelineData} from "../../database";
import {sortArrayFromDate} from "../../utils/commonHelpers";
import {fetchStart, fetchSuccess} from "./Common";

export const onFollowUser = user => {
  const tweets = timelineData.filter(item => item.author.id === user.id);
  return (dispatch, getState) => {
    dispatch(fetchStart());
    const {tweetsInfo} = getState().timeline;
    const sortedTweets = sortArrayFromDate([...tweetsInfo, ...tweets])
    dispatch({type: FOLLOW_USER, payload: user});
    dispatch({type: GET_TWEETS_INFO, payload: sortedTweets});
    dispatch(fetchSuccess());
  }
};

export const onUnFollowUser  = userId => {
  return (dispatch, getState) => {
    dispatch(fetchStart());
    const {tweetsInfo} = getState().timeline;
    const tweets = tweetsInfo.filter(item => item.author.id !== userId);
    dispatch({type: UNFOLLOW_USER, payload: userId});
    dispatch({type: GET_TWEETS_INFO, payload: tweets})
    dispatch((fetchSuccess()))
  }
}

export const getTweetsInfo = userId => {
  const tweets = timelineData.filter(item => item.author.id === userId);
  return dispatch => {
    dispatch(fetchStart());
    dispatch({type: GET_TWEETS_INFO, payload: tweets})
    dispatch((fetchSuccess()))
  }
};

export const onCreateNewTweet = tweet => {
  return dispatch => {
    dispatch(fetchStart());
    dispatch({type: CREATE_TWEET, payload: tweet})
    dispatch((fetchSuccess()))
  }
};

export const onUpdateTweetInfo = tweet => {
  return dispatch => {
    dispatch(fetchStart());
    dispatch({type: UPDATE_TWEET, payload: tweet})
    dispatch((fetchSuccess()))
  }
};

export const onDeleteTweet = tweetId => {
  return dispatch => {
    dispatch(fetchStart());
    dispatch({type: DELETE_TWEET, payload: tweetId})
    dispatch((fetchSuccess()))
  }
};

export const getSuggestionList = () => {
  return dispatch => {
    dispatch(fetchStart());
    dispatch({type: GET_SUGGESTIONS_LIST, payload: suggestionsList})
    dispatch((fetchSuccess()))
  }
};