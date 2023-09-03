import React from 'react';
import { motion } from 'framer-motion';

const ApiSongCard = ({ data, index }) => {
  const { name, imageURL, artist, _id } = data;

  return (
    <motion.div
      key={_id}
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative w-60 h-auto px-4 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center mt-4" // Add margin-top here
    >
      <div className="w-60 rounded-lg drop-shadow-lg relative overflow-hidden">
        <motion.img
          src={imageURL}
          alt=""
          className="w-full rounded-lg object-cover"
          style={{ aspectRatio: '1/1' }} // Maintain a 1:1 aspect ratio
        />
      </div>

      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <p className="text-lg text-headingColor font-semibold my-2">
            {name.length > 25 ? `${name.slice(0, 25)}` : name}
          </p>
          <p className="text-sm text-gray-400">{artist}</p>
        </div>
        <div className="mt-4">
          {/* Comment section */}
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
            Comment
          </button>
        </div>
        <div className="mt-4">
          {/* Comments display section */}
          <h2 className="text-lg font-semibold">Comments</h2>
          <div className="mt-2">
            {/* Individual comments */}
            {/* Example: */}
            <div className="bg-gray-100 p-2 rounded">
              <p>Comment 1</p>
            </div>
            <div className="bg-gray-100 p-2 rounded mt-2">
              <p>Comment 2</p>
            </div>
            {/* Add more comments here */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApiSongCard;
