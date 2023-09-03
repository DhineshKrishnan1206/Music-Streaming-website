import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';
import { motion } from 'framer-motion';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaMinus } from 'react-icons/fa'; // Import the FaMinus icon

import MinimizeIcon from '../assets/img/minimize.png';

const ApiMusicPlayer = ({ songUrl, songNameFromAPI, songImageFromAPI ,albumNameFromAPI}) => {
  const [{ miniPlayer }] = useStateValue();
  const [showDetails, setShowDetails] = useState(true); // State to control displaying song details
  const [minimized, setMinimized] = useState(false); // State to control minimized view

  useEffect(() => {
    
  }, [songUrl, songNameFromAPI]);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <div
      className={`fixed bottom-0 w-full bg-white p-4 z-10 ${
        miniPlayer ? 'top-40' : ''
      } ${minimized ? 'h-16 justify-center' : ''}`}
      style={{
        backdropFilter: 'blur(10px)', // Apply a blur to create the glass effect
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjust opacity as needed
        borderRadius: '20px', // Add rounded corners
      }}
    >
      <div className={`flex items-center gap-3 ${minimized ? 'justify-center' : ''}`}>
        {/* Song image */}
        <img
          src={songImageFromAPI} // Use the songImageFromAPI variable as the image source
          className={`w-20 h-20 object-cover rounded-md ${
            minimized ? 'hidden' : ''
          }`}
          alt=""
        />
        {/* Song details and play controls */}
        <div className={`flex items-center w-full gap-3 ${minimized ? 'hidden' : ''}`}>
          <div>
            <p className="text-xl text-headingColor font-semibold">
              {songNameFromAPI} {/* Use the songNameFromAPI variable as the song name */}
              <span className="text-base ml-2 text-gray-500">{albumNameFromAPI}</span>
            </p>
            <p className="text-textColor text-sm font-semibold">
              Artist Name (Category)
            </p>
          </div>
          <div className="flex-1">
            {/* Use the audioSrc state as the audio source */}
            <AudioPlayer
              src={songUrl} // Use the audio source from props
              autoPlay={true}
              showSkipControls={true}
            />
          </div>
        </div>
      </div>
      {minimized ? (
        <div className="flex items-center justify-center gap-3 mt-4">
          <motion.i whileTap={{ scale: 0.8 }}>{/* Add play icon here */}</motion.i>
          <motion.i whileTap={{ scale: 0.8 }}>{/* Add pause icon here */}</motion.i>
          <motion.i whileTap={{ scale: 0.8 }}>{/* Add next icon here */}</motion.i>
          <button
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={toggleMinimize}
          >
            Expand
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 mt-4">
          <motion.i whileTap={{ scale: 0.8 }}>{/* Add your close icon here */}</motion.i>
          <motion.i whileTap={{ scale: 0.8 }}>{/* Add your arrow icon here */}</motion.i>
          <motion.i whileTap={{ scale: 0.8 }}>{/* Add volume icon here */}</motion.i>
          <motion.i
            whileTap={{ scale: 0.8 }}
            onClick={toggleMinimize}
            className="text-blue-500 cursor-pointer"
          >
            <FaMinus /> {/* Add the minimize icon here */}
          </motion.i>
        </div>
      )}
    </div>
  );
};

export default ApiMusicPlayer;
