import React, { useEffect, useState } from "react";
import { useStateValue } from "../Context/StateProvider";
import { motion } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const ApiMusicPlayer = ({ songUrl, songName }) => {
  const [{ miniPlayer }] = useStateValue();

  useEffect(() => {
    console.log("Audio Source Changed:", songUrl);
    console.log("Current Song Name:", songName);
  }, [songUrl, songName]);

  return (
    <div className="w-full full flex items-center gap-3 overflow-hidden">
      <div
        className={`w-full full items-center gap-3 p-4 ${
          miniPlayer ? "absolute top-40" : "flex relative"
        }`}
      >
        {/* Replace these placeholders with your desired UI */}
        <img
          src="your_image_url_here"
          className="w-40 h-20 object-cover rounded-md"
          alt=""
        />
        <div className="flex items-start flex-col">
          <p className="text-xl text-headingColor font-semibold">
            {songName}
            <span className="text-base">(album.name)</span>
          </p>
          <p className="text-textColor">
            Artist Name
            <span className="text-sm text-textColor font-semibold">
              (Category)
            </span>
          </p>
          <motion.i whileTap={{ scale: 0.8 }}>
            {/* Add your icon here */}
          </motion.i>
        </div>
        <div className="flex-1">
          {/* Use the audioSrc state as the audio source */}
          <AudioPlayer
            src={songUrl} // Use the audio source from props
            autoPlay={true}
            showSkipControls={true}
          />
        </div>
        <div className="h-full flex items-center justify-center flex-col gap-3">
          <motion.i whileTap={{ scale: 0.8 }}>
            {/* Add your close icon here */}
          </motion.i>
          <motion.i whileTap={{ scale: 0.8 }}>
            {/* Add your arrow icon here */}
          </motion.i>
        </div>
      </div>
    </div>
  );
};

export default ApiMusicPlayer;
