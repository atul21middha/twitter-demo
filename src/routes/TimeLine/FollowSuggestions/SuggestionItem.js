import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {onFollowUser, onUnFollowUser} from "../../../redux/actions/TimeLine";

const SuggestionItem = ({user}) => {
  const dispatch = useDispatch();
  const {authUser} = useSelector(({auth}) => auth);
  const {profilePic, username, name} = user;

  console.log("authUser", authUser);

  const isUserFollowed = authUser.following.some((item) => item.id === user.id);
  return (
    <div className='d-flex align-items-center border-bottom mt-3 p-3'>
      <div className='d-flex align-items-center'>
        <Avatar size={40} src={profilePic} alt={name}/>
        <div className='ml-3'>
          <div className='font-weight-bold'>{name}</div>
          <div>@{username}</div>
        </div>
      </div>
      {isUserFollowed ?
        <Button className='ml-auto rounded' variant="contained" size='small' color="primary"
                onClick={() => dispatch(onUnFollowUser(user.id))}>
          UnFollow
        </Button>
        :
        <Button className='ml-auto rounded' size='small' variant="outlined" color="primary"
                onClick={() => dispatch(onFollowUser(user))}>
          Follow
        </Button>}
    </div>
  );
};

export default SuggestionItem;