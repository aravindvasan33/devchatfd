import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed && feed.length) return; // Only fetch if feed is empty
    try {
      const res = await axios.get('http://localhost:7000/feed', {
        withCredentials: true,
      });
      console.log(res.data);
      dispatch(addFeed(res.data?.data));
    } catch (err) {
      console.error("error" + err); // Corrected console.error
    }
  };

  useEffect(() => {
    getFeed(); // Call getFeed properly in useEffect
  }, []); // Empty dependency array so it runs only once on mount

  return (
    <div className='flex justify-center my-10'>
      {feed && feed.length ? (
        
          <UserCard user={feed[0]} />
        )
       : (
        <p>Loading feed...</p> // Display a loading message while waiting for data
      )}
    </div>
  );
};

export default Feed;
