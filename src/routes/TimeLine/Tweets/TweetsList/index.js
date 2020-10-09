import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTweetsInfo} from "../../../../redux/actions/TimeLine";
import TweetItem from "./TweetItem";

const TweetsList = () => {
  const dispatch = useDispatch();
  const {tweetsInfo} = useSelector(({timeline}) => timeline);
  const {authUser} = useSelector(({auth}) => auth);

  useEffect(() => {
    dispatch(getTweetsInfo(authUser.id))
  }, [authUser.id, dispatch]);

  return (
    <div>
      {tweetsInfo.length > 0 ?
        tweetsInfo.map((tweet, index) => <TweetItem tweet={tweet} key={index}/>)
        :
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='font-weight-bold'>Welcome to Twitter!</div>
          <div className='mt-2'>This is the best place to see what’s happening in your world. Find some people and
            topics to follow
            now.
          </div>
        </div>
      }
    </div>
  );
};

export default TweetsList;