import React from 'react';
import CreateTweet from "./CreateTweet";
import TweetsList from "./TweetsList";

const Tweets = () => {
  return (
    <div>
     <CreateTweet/>
     <div className='mt-5'>
       <TweetsList/>
     </div>
    </div>
  );
};

export default Tweets;