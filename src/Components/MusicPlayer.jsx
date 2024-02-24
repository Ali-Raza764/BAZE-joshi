import React, { useState, useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import {
  FiPlay,
  FiPause,
  FiSkipBack,
  FiSkipForward,
  FiHeart,
  FiShare,
} from "react-icons/fi";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [liked, setLiked] = useState(false); // Track like button state

  // Simulating loading for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simulate loading completion after 2 seconds
    }, 2000);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const value = e.target.value;
    setProgress(value);
    // Logic to update the current playback position
  };

  const handleLike = () => {
    setLiked(!liked); // Toggle like state
  };

  return (
    <div
      className="
     w-full bg-gray-900 text-white md:p-4 p-2 flex items-center justify-between"
    >
      <div className="flex items-center md:space-x-4">
        {isLoading ? ( // Render loader if loading
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-300"></div>
        ) : (
          <img
            src="/song-image.jpg"
            alt="Song"
            className="h-12 w-12 rounded-md"
          />
        )}
        <div>
          <h3 className="text-lg font-bold text-ellipsis line-clamp-1">
            Song Title
          </h3>
          <p className="text-sm hidden md:block">Artist Name</p>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row-reverse gap-x-3 gap-y-2
       items-center space-x-4"
      >
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-48 top-3"
        />
        <div className="buttons flex items-center">
          <button className="text-white">
            <FiSkipBack className="h-6 w-6" />
          </button>
          <button onClick={handlePlayPause} className="text-white">
            {isPlaying ? (
              <FiPause className="h-6 w-6" />
            ) : (
              <FiPlay className="h-6 w-6" />
            )}
          </button>
          <button className="text-white">
            <FiSkipForward className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex items-center ml-2">
        <div className="dekstop-countrols hidden md:flex items-center space-x-4">
          <button onClick={handleLike} className="text-white">
            <FiHeart className={`h-6 w-6 ${liked ? "text-red-500" : ""}`} />
          </button>
          <button className="text-white">
            <FiShare className="h-6 w-6" />
          </button>
        </div>
        <button className="text-white md:hidden">
          <TiThMenuOutline size={25} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
