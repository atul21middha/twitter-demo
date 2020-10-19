import React from 'react';
import Avatar from "@material-ui/core/Avatar";

const BoardItem = ({user}) => {
  const {profilePic, username, name, followers} = user;

  const followerString = followers > 1000 ?  `${(followers/1000).toFixed(2)}k` : followers;

  return (
    <div className='d-flex border-bottom mt-3 p-3'>
      <div className='d-flex align-items-center'>
        <Avatar size={40} src={profilePic} alt={name}/>
        <div className='ml-3'>
          <div className='font-weight-bold'>{name}</div>
          <div>@{username}</div>
        </div>
      </div>
     <div className='ml-auto'>{followerString} followers</div>
    </div>
  );
};

export default BoardItem;