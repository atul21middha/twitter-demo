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
  }, [authUser.id, dispatch])

  return (
    <div>
      {tweetsInfo.map((tweet, index) => <TweetItem tweet={tweet} key={index}/>)}
    </div>
  );
};

export default TweetsList;