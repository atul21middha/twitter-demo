import {getCustomDateTime} from "../utils/dateHelpers";

export const users = [
  {
    id: 323232,
    name: "Atul Midha",
    username: 'atul253middha',
    email: "atul253middha@gmail.com",
    password: "12345678",
    profilePic: require('../assets/images/avatar4.jpg'),
    following: []
  },
  {
    id: 443443,
    name: 'Demo User',
    username: 'demo_user',
    email: 'demo@testing.com',
    password: '12345678',
    profilePic: require('../assets/images/avatar4.jpg'),
    following: []
  }
];

export const suggestionsList =  [
  {
    id: 2343453,
    name: 'John Doe',
    username: 'john_doe',
    email: 'john@doe.com',
    password: '12345678',
    profilePic: require('../assets/images/avatar5.jpg'),
    following: []
  },
  {
    id: 43543545,
    name: 'Sara Taylor',
    username: 'sara.taylor',
    email: 'sara.taylor@example.com',
    password: '12345678',
    profilePic: require('../assets/images/avatar6.jpg'),
    following: []
  },
  {
    id: 34344,
    name: 'Kane Lee',
    username: 'kane.lee',
    email: 'kane.lee@xyz.com',
    password: '12345678',
    profilePic: require('../assets/images/avatar7.jpg'),
    following: []
  },
  {
    id: 856777,
    name: 'Rahul Dravid',
    username: 'rahul.dravid',
    email: 'rahul.dravid@bcci.com',
    password: '12345678',
    profilePic: require('../assets/images/avatar8.jpg'),
    following: []
  },
  {
    id: 443443,
    name: 'Demo User',
    username: 'demo_user',
    email: 'demo@testing.com',
    password: '12345678',
    profilePic: require('../assets/images/avatar4.jpg'),
    following: []
  }
];

export const timelineData = [
  {
    id: 3343, content: 'Awesome experience working with XYZ organization', attachments: [],
    date: getCustomDateTime(-80, 'minutes', 'ddd MMM DD YYYY kk:mm:ss Z'),
    comments: [], likes: 19, reTweets: 10,
    author:  {
      id: 2343453,
      name: 'John Doe',
      username: 'john_doe',
      email: 'john@doe.com',
      password: '12345678',
      profilePic: require('../assets/images/avatar5.jpg'),
      following: []
    },
  },
  {
    id: 34343, content: 'Hardwork is key to success, Repeat it again!', attachments: [],
    date: getCustomDateTime(-20, 'minutes', 'ddd MMM DD YYYY kk:mm:ss Z'),
    comments: [], likes: 454, reTweets: 234,
    author: {
      id: 323232,
      name: "Atul Midha",
      email: "atul253middha@gmail.com",
      username: 'atul253middha',
      password: "12345678",
      profilePic: require('../assets/images/avatar4.jpg')
    },
  },
  {
    id: 34343, content: 'Hardwork is key to success, Repeat it again!', attachments: [],
    date: getCustomDateTime(-1, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    comments: [], likes: 454, reTweets: 234,
    author: {
      id: 323232,
      name: "Atul Midha",
      email: "atul253middha@gmail.com",
      username: 'atul253middha',
      password: "12345678",
      profilePic: require('../assets/images/avatar4.jpg')
    },
  },
  {
    id: 33543, content: 'Making webapp is really a interesting work, one can do it always!', attachments: [],
    date: getCustomDateTime(-2, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    comments: [], likes: 434, reTweets: 12,
    author: {
      id: 323232,
      name: "Atul Midha",
      email: "atul253middha@gmail.com",
      username: 'atul253middha',
      password: "12345678",
      profilePic: require('../assets/images/avatar4.jpg')
    },
  },
  {
    id: 36343, content: 'This is my first tweet on Twitter, Happy tweeting!', attachments: [],
    date: getCustomDateTime(-3, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    comments: [], likes: 0, reTweets: 0,
    author: {
      id: 323232,
      name: "Atul Midha",
      email: "atul253middha@gmail.com",
      username: 'atul253middha',
      password: "12345678",
      profilePic: require('../assets/images/avatar4.jpg')
    },
  }
];