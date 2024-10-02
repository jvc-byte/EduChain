// VideoPlayer.tsx

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { videoData } from '../../const';  // Import the video data from const.ts

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]); // Default to the first video

  return (
    <div className="mt-10 text-white">
      <h1 className="text-center text-xl font-bold">{selectedVideo.title}</h1>
      <div className="flex justify-center mt-4">
        <ReactPlayer url={selectedVideo.url} controls />
      </div>
      <p className="text-center mt-2">{selectedVideo.description}</p>

      {/* Video List */}
      <div className="mt-8 space-y-4">
        {videoData.map((video, index) => (
          <button 
            key={index}
            className="block mx-auto p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            onClick={() => setSelectedVideo(video)}
          >
            {video.title} ({video.platform})
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
