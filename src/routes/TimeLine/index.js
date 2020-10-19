import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar";
import Tweets from "./Tweets";
import FollowSuggestions from "./FollowSuggestions";
import {getSuggestionList} from "../../redux/actions/TimeLine";
import {useDispatch} from "react-redux";
import LeaderBoard from "./LeaderBoard";

const TimeLine = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestionList())
  }, [dispatch]);

  return (
    <div className='p-4'>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Sidebar/>
        </Grid>
        <Grid item xs={6}>
          <Tweets/>
        </Grid>
        <Grid item xs={3}>
          <LeaderBoard/>
          <FollowSuggestions/>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimeLine;