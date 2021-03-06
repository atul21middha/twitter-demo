import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import {getTimeDiffString} from "../../../../utils/dateHelpers";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch} from "react-redux";
import {onDeleteTweet} from "../../../../redux/actions/TimeLine";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplayIcon from '@material-ui/icons/Replay';
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';


const TweetItem = ({tweet}) => {
  const dispatch = useDispatch();
  const {id, author, content, attachments, date} = tweet;
  const [showMoreOptions, setShowMoreOptions] = useState(null);
  const [like, setLike] = useState(false);
  const [reTweet, setReTweet] = useState(false);

  const toggleLikeStatus = () => setLike(!like);

  const toggleReTweetStatus = () => setReTweet(!reTweet);

  const onShowMoreOptions = event => {
    setShowMoreOptions(event.currentTarget);
  };

  const onHideMoreOptions = () => {
    setShowMoreOptions(null);
  };

  const onClickDelete = () => {
    dispatch(onDeleteTweet(id));
    onHideMoreOptions()
  };

  return (
    <Card className='bg-light p-3 mb-5'>
      <div className='d-flex'>

        <Avatar size={40} src={author.profilePic} alt={author.name}/>

        <div className='ml-3 flex-grow-1'>
          <div className='d-flex align-items-center'>
            <div className='font-weight-bold'>{author.name}</div>
            <div className='ml-3'>@{author.username}</div>
            <div className='ml-3'>{getTimeDiffString(date)}</div>
            <div className='ml-auto'>
              <Tooltip title="More Options">
                <IconButton size="small" onClick={onShowMoreOptions}>
                  <MoreVertIcon/>
                </IconButton>
              </Tooltip>
            </div>
            <Menu anchorEl={showMoreOptions} open={Boolean(showMoreOptions)} onClose={onHideMoreOptions}>
              <MenuItem onClick={onClickDelete}>
                Delete
              </MenuItem>
              <MenuItem onClick={onHideMoreOptions}>
                Pin Post
              </MenuItem>
            </Menu>
          </div>

          <div>{content}</div>

          {attachments.length > 0 &&
          <div className='mt-2 d-flex flex-wrap'>
            {attachments.map((item, index) => (
              <div className='p-1' key={index}>
                <img src={item.preview} alt='attachment' height={100} width={100}/>
              </div>))}
          </div>}

          <div className='d-flex align-items-center justify-content-between'>
            <div style={{cursor: 'pointer'}}>
              <ChatBubbleOutlineIcon/>
            </div>
            <div onClick={toggleReTweetStatus} className={` ${reTweet ? 'text-primary' : ''}`}
                 style={{cursor: 'pointer'}}>
              <ReplayIcon/></div>
            <div onClick={toggleLikeStatus} className={` ${like ? 'text-primary' : ''}`}
                 style={{cursor: 'pointer'}}>
              <Checkbox
                icon={<StarBorderIcon/>}
                checkedIcon={<StarIcon className={like ? 'text-primary' : ''}/>}
                checked={like}
                size="small"
              /></div>
          </div>

        </div>
      </div>

    </Card>
  );
};

export default TweetItem;