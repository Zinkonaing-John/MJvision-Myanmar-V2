"use client";
import React from "react";

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  return (
    <div>
      <div style={{ maxWidth: "640px", margin: "auto" }}>
        <iframe
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
