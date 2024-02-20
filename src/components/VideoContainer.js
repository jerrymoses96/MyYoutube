import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    GetVideo();
  }, []);

  const GetVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {Videos.map((items, index) => {
        return (
          <Link to={"/watch?v=" + items.id}>
            {" "}
            <VideoCard key={index} info={items} />;{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
