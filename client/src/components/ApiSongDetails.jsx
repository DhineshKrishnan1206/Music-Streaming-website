import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import ApiSongCard from './ApiSongCard'; // Import the new card component

const ApiSongDetails = () => {
  const location = useLocation();
  const { song } = location.state || {};
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      // Add the new comment to the comments list
      setComments([...comments, comment]);
      // Clear the input field
      setComment('');
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-primary">
      <Header />
      <div className="flex flex-col items-center justify-center mt-4">
        <ApiSongCard data={song} index={0} />
        {/* You can render more ApiSongCard components here if needed */}
      </div>
    </div>
  );
};

export default ApiSongDetails;
