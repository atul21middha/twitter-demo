import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSuggestionList} from "../../../redux/actions/TimeLine";
import Card from "@material-ui/core/Card";
import SuggestionItem from "./SuggestionItem";

const FollowSuggestions = () => {
  const dispatch = useDispatch();
  const {suggestionsList} = useSelector(({timeline}) => timeline);

  useEffect(() => {
    dispatch(getSuggestionList())
  }, [dispatch]);

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