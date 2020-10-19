import React from 'react';
import {useSelector} from "react-redux";
import Card from "@material-ui/core/Card";
import SuggestionItem from "./SuggestionItem";

const FollowSuggestions = () => {
  const {suggestionsList} = useSelector(({timeline}) => timeline);

  return (
    <Card className='bg-light'>
      <div className='h4 p-3 border-bottom'>Who to follow</div>
      <div>
        {suggestionsList.map((user, index) => <SuggestionItem key={index} user={user}/>)}
      </div>
    </Card>
  );
};

export default FollowSuggestions;