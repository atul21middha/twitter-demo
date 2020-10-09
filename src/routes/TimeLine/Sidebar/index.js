import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/More';
import MessageIcon from '@material-ui/icons/Message';
import NoteIcon from '@material-ui/icons/Note';
import ListIcon from '@material-ui/icons/List';

const options = [
  {icon: <HomeIcon/>, slug: 'home', title: 'Home'},
  {icon: <PersonIcon/>, slug: 'profile', title: 'Profile'},
  {icon: <MessageIcon/>, slug: 'messages', title: 'Messages'},
  {icon: <NoteIcon/>, slug: 'bookmarks', title: 'Bookmarks'},
  {icon: <ListIcon/>, slug: 'lists', title: 'Lists'},
  {icon: <NotificationsIcon/>, slug: 'notifications', title: 'Notifications'},
  {icon: <MoreIcon/>, slug: 'more', title: 'More'}
];

const Sidebar = () => {
  return (
    <Card className='p-2 pl-5 min-vh-100'>
        <Button variant="contained" color="primary" className=" mt-4 w-75 rounded">
          Tweet
        </Button>
      <div className='mt-5'>
        {options.map((item, index) => (
          <div key={index} className='d-flex align-items-center mt-3' style={{cursor: 'pointer'}}>
            {item.icon}
            <div className='h6 ml-3'>{item.title}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Sidebar;