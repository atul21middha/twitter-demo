import React from 'react';
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar";
import Tweets from "./Tweets";
import FollowSuggestions from "./FollowSuggestions";
import {Route, Switch} from "react-router-dom";
import Login from "../Auth/Login";

const TimeLine = () => {
  return (
    <div className='p-4'>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Sidebar/>
        </Grid>
        <Grid item xs={6}>
          <Switch>
            <Route path="/home" exact component={Tweets} />
            <Route path="/messages" exact component={Login} />
          </Switch>
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