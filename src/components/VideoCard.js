import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="w-60 shadow-md rounded-lg p-1">
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

// higher order components

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-b-2">
      <VideoCard info={info} />
      <span className="font-bold">Ad</span>
    </div>
  );
};

export default VideoCard;
