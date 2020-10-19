import React from 'react';
import Card from "@material-ui/core/Card";
import {useSelector} from "react-redux";
import BoardItem from "./BoardItem";

const LeaderBoard = () => {
  const {suggestionsList} = useSelector(({timeline}) => timeline);

  const dataList = suggestionsList.sort((a,b) => b.followers - a.followers);

  return (
    <div className='mb-4'>
      <Card className='bg-light'>
        <div className='h4 p-3 border-bottom'>Leader Board</div>
        <div>
          {dataList.map((user, index) => <BoardItem key={index} user={user}/>)}
        </div>
      </Card>
    </div>
  );
};

export default LeaderBoard;