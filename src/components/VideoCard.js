import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="w-64 shadow-md rounded-lg p-1">
      <img
        className="rounded-md"
        alt="videoimage"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <p className="font-semibold">{info?.snippet?.title}</p>
      <p className="font-serif my-1">{info?.snippet?.channelTitle}</p>
      <ul>
        <li className="font-light">{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
