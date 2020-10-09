import React from 'react';
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar";
import Tweets from "./Tweets";
import FollowSuggestions from "./FollowSuggestions";

const TimeLine = () => {
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
          <FollowSuggestions/>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimeLine;